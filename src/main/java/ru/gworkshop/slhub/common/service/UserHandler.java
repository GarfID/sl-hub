package ru.gworkshop.slhub.common.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import org.bouncycastle.util.encoders.Hex;
import org.hibernate.ObjectNotFoundException;
import org.hibernate.PersistentObjectException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.model.repository.UserRepository;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserHandler
{

    private Logger logger = LoggerFactory.getLogger( UserHandler.class);
    private UserRepository userRepository;

    @Autowired
    public UserHandler( UserRepository userRepository )
    {
        this.userRepository = userRepository;
    }

    public User get( Long id ) throws ObjectNotFoundException
    {
        Optional<User> optionalUser = userRepository.findById( id );
        if ( optionalUser.isPresent() ) { return optionalUser.get(); } else {
            throw new ObjectNotFoundException( "id", User.class.getName() );
        }
    }

    public User get( String token ) throws ObjectNotFoundException
    {
        return get( Auth.getIdToken( token )
                        .getPayload() );
    }

    public User get( GoogleIdToken.Payload payload )
    {
        Optional<User> optionalUser = userRepository.findByGoogleId( payload.getSubject() );
        if ( optionalUser.isPresent() ) {
            return optionalUser.get();
        } else {
            throw new ObjectNotFoundException( "googleId", User.class.getName() );
        }
    }

    public boolean exists( String token )
    {
        return exists( Auth.getIdToken( token )
                           .getPayload() );
    }

    public boolean exists( GoogleIdToken.Payload payload )
    {
        return userRepository.existsByGoogleId( payload.getSubject() );
    }

    public User register( String token ) throws PersistentObjectException, NoSuchAlgorithmException
    {
        GoogleIdToken.Payload payload = Objects.requireNonNull( Auth.getIdToken( token ) )
                                               .getPayload();
        if ( !exists( payload ) ) {
            MessageDigest digest;
                digest = MessageDigest.getInstance( "SHA-256" );
                byte[] hash = digest.digest();

                User newUser = User.builder()
                                   .email( payload.getEmail() )
                                   .googleId( payload.getSubject() )
                                   .state( new String( Hex.encode( hash ) ) )
                                   .isAdmin( payload.getEmail()
                                                    .equals( "garfid.n.rena@gmail.com" ) )
                                   .build();
                userRepository.save( newUser );
                return newUser;
        } else {
            throw new PersistentObjectException( "User with such Google Account Already registered" );
        }
    }

    public String getUserState( String token ) throws ObjectNotFoundException
    {
        if ( exists( token ) ) {
            return userRepository.findStateByGoogleId( Objects.requireNonNull( Auth.getIdToken( token ) )
                                                              .getPayload()
                                                              .getSubject() );
        } else {
            throw new ObjectNotFoundException( "googleId", User.class.getName());
        }
    }
}

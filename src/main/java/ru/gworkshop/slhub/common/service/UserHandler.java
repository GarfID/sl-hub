package ru.gworkshop.slhub.common.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.hibernate.ObjectNotFoundException;
import org.hibernate.PersistentObjectException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.model.repository.UserRepository;
import ru.gworkshop.slhub.common.model.responce.AuthResponse;
import ru.gworkshop.slhub.common.model.responce.LoginResponse;
import ru.gworkshop.slhub.common.model.responce.UserResponse;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserHandler
{

    /**
     * Статусы:
     * 21 - успешная регистрация нового пользователя
     * 25 - успешная авторизация
     * 43 - пользователь уже зарегистрирован
     * 44 - пользователь не найден
     * 45 - токен не верифицирован
     * 500 - непредвиденная ошибка
     */

    private static final Logger logger = LoggerFactory.getLogger( UserHandler.class );
    private final UserRepository userRepository;

    @Autowired
    public UserHandler( UserRepository userRepository )
    {
        this.userRepository = userRepository;
    }

    public User get( Long id ) throws ObjectNotFoundException
    {
        Optional<User> optionalUser = userRepository.findById( id );
        if ( optionalUser.isPresent() ) {
            return optionalUser.get();
        } else {
            throw new ObjectNotFoundException( "id", User.class.getName() );
        }
    }

    public User get( String token ) throws ObjectNotFoundException
    {
        return get( UserHandler.getIdToken( token )
                               .getPayload() );
    }

    private User get( GoogleIdToken.Payload payload )
    {
        Optional<User> optionalUser = userRepository.findByGoogleId( payload.getSubject() );
        if ( optionalUser.isPresent() ) {
            return optionalUser.get();
        } else {
            throw new ObjectNotFoundException( "googleId", User.class.getName() );
        }
    }

    private boolean exists( String token )
    {
        return exists( UserHandler.getIdToken( token )
                                  .getPayload() );
    }

    private boolean exists( GoogleIdToken.Payload payload )
    {
        return userRepository.existsByGoogleId( payload.getSubject() );
    }

    private User register( String token ) throws PersistentObjectException
    {
        GoogleIdToken.Payload payload = Objects.requireNonNull( UserHandler.getIdToken( token ) )
                                               .getPayload();
        if ( !exists( payload ) ) {

            User newUser = User.builder()
                               .email( payload.getEmail() )
                               .googleId( payload.getSubject() )
                               .isAdmin( payload.getEmail()
                                                .equals( "garfid.n.rena@gmail.com" ) )
                               .build();
            userRepository.save( newUser );
            return newUser;
        } else {
            throw new PersistentObjectException( "User with such Google Account Already registered" );
        }
    }

    private static GoogleIdToken getIdToken( String token )
    {
        logger.debug( "Entering getIdToken with arg " + token );
        HttpTransport transport = new NetHttpTransport();
        JsonFactory jsonFactory = new JacksonFactory();
        String CLIENT_ID = "793835333693-3vm2oobhs289tfhrod3uhintopibb0gg.apps.googleusercontent.com";
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder( transport, jsonFactory ).setAudience(
                Collections.singletonList( CLIENT_ID ) )
                                                                                                    .build();
        try {
            GoogleIdToken idToken = verifier.verify( token );
            if ( idToken == null ) {
                logger.debug( "Token is not verified" );
                throw new NullPointerException( "Verifier returned NULL" );
            } else {
                logger.debug( "idToken is " + token );
                return idToken;
            }
        } catch (NullPointerException | IllegalArgumentException | GeneralSecurityException | IOException e) {
            logger.debug( "Token invalid while validating" );
            throw new IllegalArgumentException( "Invalid token" );
        }
    }

    private boolean checkToken( String token )
    {
        logger.debug( "Entered checkToken with arg " + token );
        if ( token == null || token.length() < 64 ) {
            logger.debug( "Token is too short" );
            return false;
        } else {
            try {
                getIdToken( token );
            } catch (IllegalArgumentException e) {
                return false;
            }
            return true;
        }
    }

    public AuthResponse checkAuth( String token )
    {
        logger.debug( "Entered checkAuth with arg " + token );
        if ( checkToken( token ) ) {
            if ( exists( token ) ) {
                return new AuthResponse( 25 );
            } else {
                return new AuthResponse( 44 );
            }
        } else {
            logger.debug( "Received token is invalid" );
            return new AuthResponse( 45 );
        }
    }

    public LoginResponse login( String token )
    {
        if ( checkToken( token ) ) {
            if ( this.exists( token ) ) {
                return new LoginResponse( 25, this.get( token ) );
            } else {
                return new LoginResponse( 21, this.register( token ) );
            }
        } else {
            return new LoginResponse( 45 );
        }
    }

    public LoginResponse sync( String token )
    {
        if ( checkToken( token ) ) {
            if ( this.exists( token ) ) {
                return new LoginResponse( 25, this.get( token ) );
            } else {
                return new LoginResponse( 44, null );
            }
        } else {
            return new LoginResponse( 45, null );
        }
    }

    public UserResponse findByEmail( String email )
    {
        Optional<User> optionalUser = this.userRepository.findByEmail( email );
        return optionalUser.map( user -> new UserResponse( 24, user ) )
                           .orElseGet( () -> new UserResponse( 44 ) );
    }
}

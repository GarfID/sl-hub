package ru.gworkshop.slhub.common.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.hibernate.ObjectNotFoundException;
import org.hibernate.PersistentObjectException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import ru.gworkshop.slhub.common.model.entity.GoogleUserInfo;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.model.repository.UserRepository;
import ru.gworkshop.slhub.common.model.responce.REST.UniversalResponse;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;

/**
 * @author Aleksey Chebotarev <garfid.n.rena@gmail.com>
 * @version 0.1-TEST
 * @since 0.1-TEST
 */
@Service("UserHandler")
public class UserHandler
{
    private Environment environment;

    private final UserRepository userRepository;

    private static final String CLIENT_ID = "793835333693-3vm2oobhs289tfhrod3uhintopibb0gg.apps.googleusercontent.com";
    private final GoogleIdTokenVerifier VERIFIER;

    /**
     * <p>Initializes Google API verifier and hook user entities repository</p>
     *
     * @param userRepository autowired user entities repository
     */
    @Autowired
    public UserHandler( UserRepository userRepository, Environment environment )
    {
        this.userRepository = userRepository;
        this.environment = environment;

        HttpTransport transport = new NetHttpTransport();
        JsonFactory jsonFactory = new JacksonFactory();
        VERIFIER = new GoogleIdTokenVerifier.Builder( transport, jsonFactory ).setAudience( Collections.singletonList(
                UserHandler.CLIENT_ID ) )
                                                                              .build();
    }

    /**
     * <p>Find user by ID</p>
     *
     * @param id ID of a user to be found
     *
     * @return found User object
     *
     * @throws ObjectNotFoundException thrown when user with such ID do not isRegistered
     */
    public User get( Long id ) throws ObjectNotFoundException
    {
        Optional<User> optionalUser = userRepository.findById( id );
        if ( optionalUser.isPresent() ) {
            return optionalUser.get();
        } else {
            throw new ObjectNotFoundException( "id", User.class.getName() );
        }
    }

    /**
     * <p>Find user by Google Auth Token via parsing Google ID</p>
     * <p>Untestable<p/>
     *
     * @param token Google Auth Token of a user to be found
     *
     * @return found User object
     *
     * @throws ObjectNotFoundException  thrown when user with such ID do not isRegistered
     * @throws IllegalArgumentException thrown when Google Auth Token is invalid
     */
    public User get( String token ) throws ObjectNotFoundException, IllegalArgumentException
    {
        if ( checkToken( token ) ) {
            GoogleUserInfo googleUserInfo = getIdToken( token );

            Optional<User> optionalUser = userRepository.findByGoogleId( googleUserInfo.googleId );
            if ( optionalUser.isPresent() ) {
                return optionalUser.get();
            } else {
                throw new ObjectNotFoundException( "googleId", User.class.getName() );
            }
        } else {
            throw new IllegalArgumentException( "Invalid Google Auth Token" );
        }
    }

    /**
     * <p>Find user with specified email and </p>
     *
     * @param email e-mail of user to be found
     *
     * @return found user or null if user with such email do not exist
     *
     * @throws ObjectNotFoundException thrown if user with such email is not registered
     */
    public User getByEmail( String email ) throws ObjectNotFoundException
    {
        Optional<User> optionalUser = this.userRepository.findByEmail( email );
        if ( optionalUser.isPresent() ) {
            return optionalUser.get();
        } else {
            throw new ObjectNotFoundException( "id", User.class.getName() );
        }
    }

    /**
     * <p>Check if a user with such ID registered</p>
     *
     * @param id id of a User to be checked
     *
     * @return if a user with such ID is registered
     */
    public boolean isRegistered( Long id )
    {
        return userRepository.existsById( id );
    }

    /**
     * <p>Check if a user with Google Auth Token registered via parsing Google ID</p>
     *
     * @param token Google Auth Token of a user to be checked
     *
     * @return if a user represented with such token registered
     *
     * @throws IllegalArgumentException thrown when Google Auth Token is invalid
     */
    public boolean isRegistered( String token ) throws IllegalArgumentException
    {
        if ( checkToken( token ) ) {
            GoogleUserInfo googleUserInfo = getIdToken( token );

            return userRepository.existsByGoogleId( googleUserInfo.googleId );
        } else {
            throw new IllegalArgumentException( "Invalid Google Auth Token" );
        }
    }

    /**
     * <p>Register new user</p>
     *
     * @param token Google Auth Token to define new user's info
     *
     * @return new user object
     *
     * @throws PersistentObjectException thrown when such user is already registered
     * @throws IllegalArgumentException  thrown when Google Auth Token is invalid
     */
    public User register( String token, Boolean isAdmin ) throws PersistentObjectException, IllegalArgumentException
    {
        if ( !isRegistered( token ) ) {

            GoogleUserInfo googleUserInfo = getIdToken( token );

            User newUser = User.builder()
                               .email( googleUserInfo.email )
                               .googleId( googleUserInfo.googleId )
                               .isAdmin( isAdmin )
                               .build();
            userRepository.save( newUser );
            return newUser;
        } else {
            throw new PersistentObjectException( "User with such Google Account Already registered" );
        }
    }

    /**
     * <p>Get user details from Google Auth Token</p>
     * <p>Untestable</p>
     *
     * @param token Google Auth Token to be processed
     *
     * @return Google ID Token with user details in payload
     *
     * @throws IllegalArgumentException thrown when token is invalid
     */
    public GoogleUserInfo getIdToken( String token ) throws IllegalArgumentException
    {
        /*Mocking for testing purposes*/
        if ( Arrays.asList( environment.getActiveProfiles() )
                    .contains( "test" ) ) {
            return new GoogleUserInfo( "test" + token + "@email.com", token );
        } else {
            try {
                GoogleIdToken idToken = VERIFIER.verify( token );
                if ( idToken == null ) {
                    throw new NullPointerException( "Verifier returned NULL" );
                } else {
                    return new GoogleUserInfo( idToken.getPayload() );
                }
            } catch (NullPointerException | IllegalArgumentException | GeneralSecurityException | IOException e) {
                throw new IllegalArgumentException( "Invalid token" );
            }
        }
    }

    /**
     * <p>Check if Google Auth Token is valid</p>
     * <p>Untestable</p>
     *
     * @param token Google Auth Token to be verified
     *
     * @return true if a token is valid, or false if token is invalid
     */
    private boolean checkToken( String token )
    {
        int minTokenSize;

        if ( Arrays.asList( environment.getActiveProfiles() )
                    .contains( "test" ) ) {
            minTokenSize = 1;
        } else {
            minTokenSize = 64;
        }

        if ( token == null || token.length() < minTokenSize ) {
            return false;
        } else {
            try {
                /*Mocking for testing purposes*/
                if ( !Arrays.asList( environment.getActiveProfiles() )
                           .contains( "test" ) ) {
                    VERIFIER.verify( token );
                }
            } catch (NullPointerException | IllegalArgumentException | GeneralSecurityException | IOException e) {
                return false;
            }
            return true;
        }
    }

    /**
     * <p>Form REST responce for {@link #isRegistered(String)}</p>
     * <p>statuses:</p>
     * <p>25 - user is registered</p>
     * <p>44 - user is not registered</p>
     * <p>45 - invalid token</p>
     *
     * @param token Google Auth Token of user to be checked
     *
     * @return Universal Response object with only status field set
     */
    public UniversalResponse<User> checkAuth( String token )
    {
        try {
            if ( isRegistered( token ) ) {
                return new UniversalResponse<>( 25 );
            } else {
                return new UniversalResponse<>( 44 );
            }
        } catch (IllegalArgumentException e) {
            return new UniversalResponse<>( 45 );
        }
    }

    /**
     * <p>Form REST response for {@link #register(String, Boolean)}}</p>
     * <p>statuses:</p>
     * <p>21 - new user is registered in system</p>
     * <p>25 - user already registered in system</p>
     * <p>45 - invalid token</p>
     *
     * @param token Google Auth Token of user to be checked
     *
     * @return Universal Response object with only status field set
     */
    public UniversalResponse<User> login( String token )
    {
        try {
            return new UniversalResponse<>( 25, null, get( token ) );
        } catch (ObjectNotFoundException e) {
            return new UniversalResponse<>( 21, null, this.register( token, false ) );
        } catch (IllegalArgumentException e) {
            return new UniversalResponse<>( 45 );
        }
    }

    /**
     * <p>Form REST response for {@link #get(Long)}<p/>
     * <p>statuses:</p>
     * <p>31 - user found</p>
     * <p>34 - user not found</p>
     * <p>44 - requesting user is not registered</p>
     * <p>45 - invalid token</p>
     *
     * @param token Google Auth Token of a requesting user
     * @param id    id of a user to be found
     *
     * @return UniversalResponse with status and payload fields set
     */
    public UniversalResponse<User> findUser( String token, Long id )
    {
        try {
            if ( isRegistered( token ) ) {
                try {
                    return new UniversalResponse<>( 31, null, get( id ) );
                } catch (ObjectNotFoundException e) {
                    return new UniversalResponse<>( 34 );
                }
            } else {
                return new UniversalResponse<>( 44 );
            }
        } catch (IllegalArgumentException e) {
            return new UniversalResponse<>( 45 );
        }
    }

    /**
     * <p>Form REST response for {@link #getByEmail(String)}}<p/>
     * <p>statuses:</p>
     * <p>31 - user found</p>
     * <p>34 - user not found</p>
     * <p>44 - requesting user is not registered</p>
     * <p>45 - invalid token</p>
     *
     * @param token Google Auth Token of a requesting user
     * @param email email of a user to be found
     *
     * @return UniversalResponse with status and payload fields set
     */
    public UniversalResponse<User> findUser( String token, String email )
    {
        try {
            if ( isRegistered( token ) ) {
                try {
                    return new UniversalResponse<>( 31, null, getByEmail( email ) );
                } catch (ObjectNotFoundException e) {
                    return new UniversalResponse<>( 34 );
                }
            } else {
                return new UniversalResponse<>( 44 );
            }
        } catch (IllegalArgumentException e) {
            return new UniversalResponse<>( 45 );
        }
    }
}

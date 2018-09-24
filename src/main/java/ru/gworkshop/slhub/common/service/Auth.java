package ru.gworkshop.slhub.common.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.hibernate.ObjectNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gworkshop.slhub.common.model.rest.responce.AuthResponce;
import ru.gworkshop.slhub.common.model.rest.responce.LoginResponce;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.NoSuchAlgorithmException;
import java.util.Collections;

@Service
public class Auth
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

    private static Logger logger = LoggerFactory.getLogger( Auth.class );
    private final UserHandler userHandler;

    @Autowired
    public Auth( UserHandler userHandler ){this.userHandler = userHandler;}

    static GoogleIdToken getIdToken( String token )
    {
        logger.debug( "Entering getIdToken with arg " + token);
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
                throw new NullPointerException( "Veryfier returned NULL" );
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
            } finally {
                return true;
            }
        }
    }

    public AuthResponce checkAuth( String token )
    {
        logger.debug( "Entered checkAuth with arg " + token );
        if ( checkToken( token ) ) {
            try {
                String shortUser = userHandler.getUserState( token );
                return new AuthResponce( 25, shortUser );
            } catch (ObjectNotFoundException e) {
                return new AuthResponce( 44, null );
            }
        } else {
            logger.debug( "Recived token is invalid" );
            return new AuthResponce( 45, null );
        }
    }

    public LoginResponce login( String token )
    {
        if ( checkToken( token ) ) {
            if ( userHandler.exists( token ) ) {
                return new LoginResponce( 25, userHandler.get( token ) );
            } else {
                try {
                    return new LoginResponce( 21, userHandler.register( token ) );
                } catch (NoSuchAlgorithmException e) {
                    e.printStackTrace();
                    return new LoginResponce( 500 );
                }
            }
        } else {
            return new LoginResponce( 45 );
        }
    }

    public LoginResponce sync( String token )
    {
        if ( checkToken( token ) ) {
            if ( userHandler.exists( token ) ) {
                return new LoginResponce( 25, userHandler.get( token ) );
            } else {
                return new LoginResponce( 44, null );
            }
        } else {
            return new LoginResponce( 45, null );
        }
    }
}

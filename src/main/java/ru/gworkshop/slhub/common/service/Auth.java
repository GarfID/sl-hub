package ru.gworkshop.slhub.common.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.model.repository.UserRepository;
import ru.gworkshop.slhub.common.model.repository.projections.ShortUser;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Collections;
import java.util.Objects;

@Service
public class Auth
{
	/**
	 * Статусы:
	 * 21 - успешная регистрация нового пользователя
	 * 25 - успешная авторизация
	 * 44 - пользователь не найден
	 * 45 - токен не верифицирован
	 */

	private final UserRepository userRepository;

	private final String CLIENT_ID = "793835333693-3vm2oobhs289tfhrod3uhintopibb0gg.apps.googleusercontent.com";

	@Autowired
	public Auth( UserRepository userRepository ){this.userRepository = userRepository;}

	public AuthResponce checkAuth( String token )
	{
		if ( checkToken( token ) ) {
			String shortUser = getShortUser( token );
			if ( shortUser != null ) {
				return new AuthResponce( 25, shortUser );
			} else {
				return new AuthResponce( 44, null );
			}
		} else {
			return new AuthResponce( 45, null );
		}
	}

	public LoginResponce login( String token )
	{
		if ( checkToken( token ) ) {
			User user = getUser( token );
			if ( user != null ) {
				return new LoginResponce( 25, user );
			} else {
				return new LoginResponce( 21, register( token ) );
			}
		} else {
			return new LoginResponce( 45 );
		}
	}

	public LoginResponce sync( String token )
	{
		if(checkToken( token )) {
			if(checkUserExists( token )){
				return new LoginResponce( 25, getUser( token ) );
			} else {
				return new LoginResponce( 44, null );
			}
		} else {
			return new LoginResponce( 45, null );
		}
	}

	private boolean checkToken( String token )
	{
		if ( token.length() > 10 ) {
				return ( getIdToken( token ) != null );
		} else {
			return false;
		}
	}

	private boolean checkUserExists( String token )
	{
		if ( checkToken( token ) ) {
			return getUser( token ) != null;
		} else {
			return false;
		}
	}

	private User register( String token )
	{
		GoogleIdToken.Payload payload = Objects.requireNonNull( getIdToken( token ) )
		                                       .getPayload();

		MessageDigest digest;
		try {
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
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}
	}

	private String getShortUser( String token )
	{
		return userRepository.findStateByGoogleId( Objects.requireNonNull( getIdToken( token ) )
		                                                  .getPayload()
		                                                  .getSubject() );
	}

	private User getUser( String token )
	{
		return userRepository.findByGoogleId( Objects.requireNonNull( getIdToken( token ) )
		                                             .getPayload()
		                                             .getSubject() );
	}

	private GoogleIdToken getIdToken( String token )
	{
		HttpTransport transport = new NetHttpTransport();
		JsonFactory jsonFactory = new JacksonFactory();
		GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder( transport, jsonFactory ).setAudience(
				Collections.singletonList( CLIENT_ID ) )
		                                                                                            .build();
		GoogleIdToken idToken;
		try {
			idToken = verifier.verify( token );
			return idToken;
		} catch (GeneralSecurityException | IOException e) {
			e.printStackTrace();
			return null;
		}
	}
}

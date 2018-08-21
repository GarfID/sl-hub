package ru.gworkshop.slhub.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;


@RestController(value = "/auth")
public class RESTController
{
	private final String CLIENT_ID = "793835333693-3vm2oobhs289tfhrod3uhintopibb0gg.apps.googleusercontent.com";

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public boolean checkAuth( @RequestParam(value = "token", defaultValue = "") String token )
	{
		if ( token.length() > 10 ) {
			HttpTransport transport = new NetHttpTransport();
			JsonFactory jsonFactory = new JacksonFactory();
			GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder( transport, jsonFactory )
					.setAudience(Collections.singletonList( CLIENT_ID ) )
					.build();
			try {
				GoogleIdToken idToken = verifier.verify( token );
				if ( idToken != null ) {
					GoogleIdToken.Payload payload = idToken.getPayload();

					String userId = payload.getSubject();
					System.out.println( "User ID: " + userId );
					System.out.println( "Email: " + payload.getEmail() );
					return true;
				} else {
					System.out.println( "Token is dead" );
					return false;
				}
			} catch (GeneralSecurityException | IOException e) {
				e.printStackTrace();
				return false;
			}
		} else {
			System.out.println( "Токен - null" );
			return false;
		}
	}
}

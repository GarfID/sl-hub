package ru.gworkshop.slhub.common.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.gworkshop.slhub.common.model.rest.responce.AuthResponce;
import ru.gworkshop.slhub.common.model.rest.responce.LoginResponce;
import ru.gworkshop.slhub.common.service.Auth;


@RestController
@CrossOrigin(origins = {"http://localhost:4200", "https://sl-hub.g-workshop.ru/"})
@RequestMapping("/user")
public class UserRESTController
{
	private final Auth auth;
	private Logger logger = LoggerFactory.getLogger( UserRESTController.class );

	@Autowired
	public UserRESTController( Auth auth ){this.auth = auth;}

	@RequestMapping(value = "/auth", method = RequestMethod.POST)
	@ResponseBody
	public AuthResponce checkAuth( @RequestParam(value = "token", defaultValue = "") String token )
	{
		logger.debug( "checkAuth recived token " + token + " (is_null = " + String.valueOf( token == null ) + ")" );
		return auth.checkAuth( token );
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public LoginResponce login( @RequestParam(value = "token", defaultValue = "") String token )
	{
		logger.debug( "login recived token " + token + " (is_null = " + String.valueOf( token == null ) + ")" );
		return auth.login( token );
	}

	@RequestMapping(value = "/sync", method = RequestMethod.POST)
	@ResponseBody
	public LoginResponce sync( @RequestParam(value = "token", defaultValue = "") String token )
	{
		logger.debug( "sync recived token " + token + " (is_null = " + String.valueOf( token == null ) + ")" );
		return auth.sync(token);
	}
}

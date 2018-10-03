package ru.gworkshop.slhub.common.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.gworkshop.slhub.common.model.responce.AuthResponse;
import ru.gworkshop.slhub.common.model.responce.LoginResponse;
import ru.gworkshop.slhub.common.model.responce.UserResponse;
import ru.gworkshop.slhub.common.service.UserHandler;


@Controller
@CrossOrigin(origins = {"http://localhost:4200", "https://sl-hub.g-workshop.ru/"})
@RequestMapping("/user")
public class UserRESTController
{
	private final UserHandler userHandler;
	private final Logger logger = LoggerFactory.getLogger( UserRESTController.class );

	@Autowired
	public UserRESTController( UserHandler userHandler ){this.userHandler = userHandler;}

	@RequestMapping(value = "/find", method = RequestMethod.POST)
    @ResponseBody
    public UserResponse findByEmail( @RequestParam(value = "token", defaultValue = "") String token, @RequestParam(value = "email", defaultValue = "") String email) {
        logger.debug( "checkAuth received token " + token + " (is_null = " + String.valueOf( token == null ) + ")" );
        return userHandler.findByEmail( email);
    }

	@RequestMapping(value = "/auth", method = RequestMethod.POST)
	@ResponseBody
	public AuthResponse checkAuth( @RequestParam(value = "token", defaultValue = "") String token )
	{
		logger.debug( "checkAuth received token " + token + " (is_null = " + String.valueOf( token == null ) + ")" );
		return userHandler.checkAuth( token );
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public LoginResponse login( @RequestParam(value = "token", defaultValue = "") String token )
	{
		logger.debug( "login received token " + token + " (is_null = " + String.valueOf( token == null ) + ")" );
		return userHandler.login( token );
	}

	@RequestMapping(value = "/sync", method = RequestMethod.POST)
	@ResponseBody
	public LoginResponse sync( @RequestParam(value = "token", defaultValue = "") String token )
	{
		logger.debug( "sync received token " + token + " (is_null = " + String.valueOf( token == null ) + ")" );
		return userHandler.sync( token);
	}
}

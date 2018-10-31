package ru.gworkshop.slhub.common.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.model.responce.REST.UniversalResponse;
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
    public UniversalResponse<User> findByEmail( @RequestParam(value = "token", defaultValue = "") String token, @RequestParam(value = "email", defaultValue = "") String email) {
        return userHandler.findUser( token, email);
    }

	@RequestMapping(value = "/auth", method = RequestMethod.POST)
	@ResponseBody
	public UniversalResponse<User> checkAuth( @RequestParam(value = "token", defaultValue = "") String token )
	{
		return userHandler.checkAuth( token );
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public UniversalResponse<User> login( @RequestParam(value = "token", defaultValue = "") String token )
	{
		return userHandler.login( token );
	}

	@RequestMapping(value = "/sync", method = RequestMethod.POST)
	@ResponseBody
	public UniversalResponse<User> sync( @RequestParam(value = "token", defaultValue = "") String token )
	{
		return userHandler.login( token);
	}
}

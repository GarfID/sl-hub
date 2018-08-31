package ru.gworkshop.slhub.common.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.gworkshop.slhub.common.service.Auth;
import ru.gworkshop.slhub.common.model.rest.responce.AuthResponce;
import ru.gworkshop.slhub.common.model.rest.responce.LoginResponce;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserRESTController
{
	private final Auth auth;

	@Autowired
	public UserRESTController( Auth auth ){this.auth = auth;}

	@RequestMapping(value = "/auth", method = RequestMethod.POST)
	@ResponseBody
	public AuthResponce checkAuth( @RequestParam(value = "token", defaultValue = "") String token )
	{
		return auth.checkAuth( token );
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public LoginResponce login( @RequestParam(value = "token", defaultValue = "") String token )
	{
		return auth.login( token );
	}

	@RequestMapping(value = "/sync", method = RequestMethod.POST)
	@ResponseBody
	public LoginResponce sync( @RequestParam(value = "token", defaultValue = "") String token )
	{
		return auth.sync(token);
	}
}

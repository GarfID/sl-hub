package ru.gworkshop.slhub.common.model.rest.responce;

import ru.gworkshop.slhub.common.model.entity.User;

public class LoginResponce
{
	public Integer status;
	public User user = null;

	public LoginResponce( Integer status){
		this.status = status;
	}

	public LoginResponce( Integer status, User user){
		this.status = status;
		this.user = user;
	}
}

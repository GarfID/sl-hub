package ru.gworkshop.slhub.common.service;

import ru.gworkshop.slhub.common.model.entity.User;

public class LoginResponce
{
	public Integer status;
	public User user = null;

	LoginResponce( Integer status){
		this.status = status;
	}

	LoginResponce( Integer status, User user){
		this.status = status;
		this.user = user;
	}
}

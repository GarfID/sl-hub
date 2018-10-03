package ru.gworkshop.slhub.common.model.responce;

import ru.gworkshop.slhub.common.model.entity.User;

//TODO: replace with UserResponse
@SuppressWarnings("FieldCanBeLocal")
public class LoginResponse
{
	private final Integer status;
	private User user = null;

	public LoginResponse( Integer status){
		this.status = status;
	}

	public LoginResponse( Integer status, User user){
		this.status = status;
		this.user = user;
	}


    public Integer getStatus()
    {
        return status;
    }

    public User getUser()
    {
        return user;
    }
}

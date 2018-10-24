package ru.gworkshop.slhub.common.model.rest.responce;


//TODO: replace with UserResponse
@SuppressWarnings("FieldCanBeLocal")
public class AuthResponse
{
	private final Integer status;

	public AuthResponse( Integer status) {
		this.status = status;
	}

	public Integer getStatus()
	{
		return status;
	}
}

package ru.gworkshop.slhub.common.model.rest.responce;

public class AuthResponce
{
	public Integer status;
	public String state;

	public AuthResponce(Integer status, String state) {
		this.status = status;
		this.state = state;
	}
}

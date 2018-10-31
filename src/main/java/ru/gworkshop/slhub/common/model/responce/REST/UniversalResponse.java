package ru.gworkshop.slhub.common.model.responce.REST;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@ToString
@EqualsAndHashCode
public class UniversalResponse<T>
{
    public Integer status;
    public String state = null;
    public T payload = null;

    public UniversalResponse( Integer status){
        this.status = status;
    }

    public UniversalResponse( Integer status, String state){
        this.status = status;
        this.state = state;
    }

    public UniversalResponse( Integer status, String state, T payload){
        this.status = status;
        this.state = state;
        this.payload = payload;
    }
}

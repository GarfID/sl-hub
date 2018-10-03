package ru.gworkshop.slhub.common.model.responce;

import ru.gworkshop.slhub.common.model.entity.User;

import java.util.ArrayList;
import java.util.List;

public class UserResponse
{
    private final Integer status;
    private final List<User> users;

    public UserResponse( Integer status){
        this.status = status;
        this.users = null;

    }

    public UserResponse( Integer status, User users ){
        this.status = status;
        this.users = new ArrayList<>(  );
        this.users.add( users );
    }

    public UserResponse( Integer status, List<User> users){
        this.status = status;
        this.users = users;
    }
}

package ru.gworkshop.slhub.common.model.entity;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;

public class GoogleUserInfo
{
    public String email;
    public String googleId;

    public GoogleUserInfo( GoogleIdToken.Payload payload )
    {
        this.email = payload.getEmail();
        this.googleId = payload.getSubject();
    }

    public GoogleUserInfo( String email, String googleId )
    {
        this.email = email;
        this.googleId = googleId;
    }
}

package ru.gworkshop.slhub.common.model.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import ru.gworkshop.slhub.common.model.entity.Crate;
import ru.gworkshop.slhub.common.model.entity.CrateUser;
import ru.gworkshop.slhub.common.model.entity.User;

import java.io.IOException;

public class UserSerializer extends StdSerializer<User>
{
    public UserSerializer()
    {
        this( null );
    }

    public UserSerializer( Class<User> t )
    {
        super( t );
    }

    @Override
    public void serialize(
            User user, JsonGenerator jsonGenerator, SerializerProvider serializerProvider
    ) throws IOException
    {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField( "id", user.getId() );
        jsonGenerator.writeStringField( "email", user.getEmail() );
        jsonGenerator.writeStringField( "googleId", user.getGoogleId() );
        jsonGenerator.writeStringField( "state", user.getState() );
        jsonGenerator.writeBooleanField( "isAdmin", user.getIsAdmin() );
        jsonGenerator.writeArrayFieldStart( "crates" );
        for( Crate crate : user.getUserCrates() ) {
            jsonGenerator.writeStartObject();
            jsonGenerator.writeNumberField( "id", crate.getId() );
            jsonGenerator.writeStringField( "label", crate.getLabel() );
            jsonGenerator.writeArrayFieldStart( "users" );
            for( CrateUser crateUser: crate.getCrateUsers() ) {
                jsonGenerator.writeStartObject();
                jsonGenerator.writeNumberField( "id", crateUser.getUser().getId() );
                jsonGenerator.writeStringField( "email", crateUser.getUser().getEmail() );
                jsonGenerator.writeBooleanField( "isOwner", crateUser.getIsOwner() );
                jsonGenerator.writeEndObject();
            }
            jsonGenerator.writeEndArray();
        }
        jsonGenerator.writeEndArray();
        jsonGenerator.writeEndObject();
    }
}

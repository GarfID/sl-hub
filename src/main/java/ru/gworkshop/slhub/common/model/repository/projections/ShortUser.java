package ru.gworkshop.slhub.common.model.repository.projections;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;
import ru.gworkshop.slhub.common.model.entity.User;

@Projection(name = "ShortUser", types = { User.class})
public interface ShortUser
{
	@Value( "#{target.id}" )
	Integer getId();

	String getState();
}

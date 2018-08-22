package ru.gworkshop.slhub.common.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import ru.gworkshop.slhub.common.model.repository.projections.ShortUser;

@Configuration
public class RestConfig extends RepositoryRestConfigurerAdapter
{

	@Override
	public void configureRepositoryRestConfiguration(
			RepositoryRestConfiguration repositoryRestConfiguration) {
		repositoryRestConfiguration.getProjectionConfiguration()
		                           .addProjection( ShortUser.class);
	}
}

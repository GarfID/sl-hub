package ru.gworkshop.slhub.common.model.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.common.model.entity.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

	Optional<User> findByGoogleId( String googleId);

	@Query(value = "SELECT state FROM hub_user WHERE google_id = :googleId", nativeQuery = true)
	String findStateByGoogleId( @Param( "googleId" ) String googleId);

	boolean existsByGoogleId ( String googleId);

}

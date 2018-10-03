package ru.gworkshop.slhub.common.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.common.model.entity.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long>
{

    Optional<User> findByGoogleId( String googleId );

    Optional<User> findByEmail( String email );

    boolean existsByGoogleId( String googleId );
}

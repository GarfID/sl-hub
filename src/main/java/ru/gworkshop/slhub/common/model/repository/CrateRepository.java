package ru.gworkshop.slhub.common.model.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.common.model.entity.Crate;
import ru.gworkshop.slhub.common.model.entity.User;

import java.util.List;

@Repository
public interface CrateRepository extends CrudRepository<Crate, Long> {

    @Query("SELECT c FROM Crate c JOIN FETCH c.crateUsers u WHERE u.users=?1")
    List<Crate> findByUser( User user);
}

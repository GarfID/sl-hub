package ru.gworkshop.slhub.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.model.entity.Crate;

@Repository
public interface CrateRepository extends CrudRepository<Crate, Long> {
}

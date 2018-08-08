package ru.gworkshop.slhub.wishlist.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.wishlist.model.entity.Priority;

@Repository
public interface PriorityRepository extends CrudRepository<Priority, Long> {
}

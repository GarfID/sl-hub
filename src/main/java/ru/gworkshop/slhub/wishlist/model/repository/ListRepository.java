package ru.gworkshop.slhub.wishlist.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.wishlist.model.entity.List;

@Repository
public interface ListRepository extends CrudRepository<List, Long> {
}

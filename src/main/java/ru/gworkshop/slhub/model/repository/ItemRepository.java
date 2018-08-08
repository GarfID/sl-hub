package ru.gworkshop.slhub.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.model.entity.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {
}

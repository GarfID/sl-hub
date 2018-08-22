package ru.gworkshop.slhub.inventory.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.inventory.model.entity.ItemCategory;

@Repository
public interface ItemCategoryRepository extends CrudRepository<ItemCategory, Long> {
}

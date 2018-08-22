package ru.gworkshop.slhub.inventory.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.inventory.model.entity.ItemShop;

@Repository
public interface ItemShopRepository extends CrudRepository<ItemShop, Long> {
}

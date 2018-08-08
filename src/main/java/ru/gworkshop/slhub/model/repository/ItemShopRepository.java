package ru.gworkshop.slhub.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.model.entity.ItemShop;

@Repository
public interface ItemShopRepository extends CrudRepository<ItemShop, Long> {
}

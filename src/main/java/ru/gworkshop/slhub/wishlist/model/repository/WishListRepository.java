package ru.gworkshop.slhub.wishlist.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.wishlist.model.entity.WishList;

@Repository
public interface WishListRepository extends CrudRepository<WishList, Long> {
}

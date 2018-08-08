package ru.gworkshop.slhub.wishlist.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gworkshop.slhub.wishlist.model.entity.Tag;

@Repository
public interface TagRepository extends CrudRepository<Tag, Long> {
}

package ru.gworkshop.slhub.wishlist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gworkshop.slhub.wishlist.model.entity.WishList;
import ru.gworkshop.slhub.wishlist.model.repository.WishListRepository;

import java.util.Optional;

@Service
public class WishListHandler
{
    private final WishListRepository wishListRepository;

    @Autowired
    private WishListHandler( WishListRepository wishListRepository )
    {
        this.wishListRepository = wishListRepository;
    }

    public WishList get( Long id )
    {
        Optional<WishList> optionalWishList = wishListRepository.findById( id );
        if(optionalWishList.isPresent()) {
            return optionalWishList.get();
        } else {
            throw new IllegalArgumentException( "No wishlist with ID " + id );
        }
    }
}

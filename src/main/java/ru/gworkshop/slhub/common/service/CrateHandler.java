package ru.gworkshop.slhub.common.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gworkshop.slhub.common.model.entity.Crate;
import ru.gworkshop.slhub.common.model.entity.CrateUser;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.model.repository.CrateRepository;
import ru.gworkshop.slhub.wishlist.model.entity.WishList;
import ru.gworkshop.slhub.wishlist.service.WishListHandler;

import java.util.Optional;

@Service
public class CrateHandler
{
    private CrateRepository crateRepository;
    private WishListHandler wishListHandler;

    @Autowired
    public CrateHandler( CrateRepository crateRepository, WishListHandler wishListHandler )
    {
        this.crateRepository = crateRepository;
        this.wishListHandler = wishListHandler;
    }

    public Crate get( Long id )
    {
        Optional<Crate> optionalCrate = crateRepository.findById( id );
        if ( optionalCrate.isPresent() ) { return optionalCrate.get(); } else {
            throw new IllegalArgumentException( "No crate with ID " + id.toString() );
        }
    }

    public boolean createCrate( User ownerUser, String label )
    {
        for ( Crate userCrate : ownerUser.getUserCrates() ) {
            if ( userCrate.getLabel()
                          .equals( label ) ) {
                return false;
            }
        }

        Crate crate = Crate.builder()
                           .label( label )
                           .build();
        CrateUser crateUser = CrateUser.builder()
                                       .user( ownerUser )
                                       .crate( crate )
                                       .isOwner( true )
                                       .build();
        if ( crate.addCrateUser( crateUser ) ) {
            crateRepository.save( crate );
            return true;
        } else {
            return false;
        }
    }

    public boolean deleteCrate( User ownerUser, Long crateId )
    {
        Optional<Crate> optionalCrate = crateRepository.findById( crateId );
        if ( optionalCrate.isPresent() ) {
            Crate crate = optionalCrate.get();
            try {
                if ( crate.getOwner()
                          .equals( ownerUser ) ) {
                    crateRepository.delete( optionalCrate.get() );
                    return true;
                } else {
                    return false;
                }
            } catch (RuntimeException e) {
                //TODO: Add proper logger
                System.out.println( e.getMessage() );
                return false;
            }
        } else {
            return false;
        }
    }

    public boolean addUser( User ownerUser, User user, Long crateId )
    {
        Optional<Crate> optionalCrate = crateRepository.findById( crateId );
        if ( optionalCrate.isPresent() ) {
            Crate crate = optionalCrate.get();
            try {
                if ( crate.getOwner()
                          .equals( ownerUser ) ) {
                    CrateUser crateUser = CrateUser.builder()
                                                   .user( user )
                                                   .crate( crate )
                                                   .isOwner( false )
                                                   .build();
                    if ( crate.addCrateUser( crateUser ) ) {
                        crateRepository.save( crate );
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } catch (RuntimeException e) {
                //TODO: Add proper logger
                System.out.println( e.getMessage() );
                return false;
            }
        } else {
            return false;
        }
    }

    public boolean deleteUser( User ownerUser, User user, Long crateId )
    {
        Optional<Crate> optionalCrate = crateRepository.findById( crateId );
        if ( optionalCrate.isPresent() ) {
            Crate crate = optionalCrate.get();
            try {
                if ( crate.getOwner()
                          .equals( ownerUser ) ) {
                    CrateUser crateUser = CrateUser.builder()
                                                   .user( user )
                                                   .crate( crate )
                                                   .isOwner( false )
                                                   .build();
                    if ( crate.removeCrateUser( crateUser ) ) {
                        crateRepository.save( crate );
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } catch (RuntimeException e) {
                //TODO: Add proper logger
                System.out.println( e.getMessage() );
                return false;
            }
        } else {
            return false;
        }
    }

    public boolean addWishList( User ownerUser, Long crateId, String label )
    {
        Optional<Crate> optionalCrate = crateRepository.findById( crateId );
        if ( optionalCrate.isPresent() ) {
            Crate crate = optionalCrate.get();
            try {
                if ( crate.getOwner()
                          .equals( ownerUser ) ) {
                    WishList list = WishList.builder()
                                            .label( label )
                                            .crate( crate )
                                            .build();
                    if ( crate.addCrateList( list ) ) {
                        crateRepository.save( crate );
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } catch (RuntimeException e) {
                //TODO: Add proper logger
                System.out.println( e.getMessage() );
                return false;
            }
        } else {
            return false;
        }
    }

    public boolean deleteWishList( User ownerUser, WishList wishList )
    {
        Crate crate = wishList.getCrate();
        if ( crate.getOwner()
                  .equals( ownerUser ) ) {
            if ( crate.removeCrateWishList( wishList ) ) {
                crateRepository.save( crate );
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

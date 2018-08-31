package ru.gworkshop.slhub.common.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.gworkshop.slhub.common.service.Auth;
import ru.gworkshop.slhub.common.service.CrateHandler;
import ru.gworkshop.slhub.common.service.UserHandler;
import ru.gworkshop.slhub.wishlist.service.WishListHandler;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/crate")
public class CrateRESTController
{
    private final Auth auth;
    private final UserHandler userHandler;
    private final CrateHandler crateHandler;
    private final WishListHandler wishListHandler;

    @Autowired
    public CrateRESTController( Auth auth, UserHandler userHandler, CrateHandler crateHandler, WishListHandler wishListHandler )
    {
        this.auth = auth;
        this.crateHandler = crateHandler;
        this.userHandler = userHandler;
        this.wishListHandler = wishListHandler;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public boolean createCrate(
            @RequestParam(value = "token", defaultValue = "") String token, @RequestParam(value = "label") String label
    )
    {
        if ( auth.checkAuth( token ).status == 25 ) {
            return crateHandler.createCrate( userHandler.get( token ), label );
        } else {
            return true;
        }
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    public boolean deleteCrate(
            @RequestParam(value = "token", defaultValue = "") String token,
            @RequestParam(value = "crate_id") Long crateId
    )
    {
        if ( auth.checkAuth( token ).status == 25 ) {
            return crateHandler.deleteCrate( userHandler.get( token ), crateId );
        } else {
            return true;
        }
    }

    @RequestMapping(value = "/add-user", method = RequestMethod.POST)
    @ResponseBody
    public boolean addUser(
            @RequestParam(value = "token", defaultValue = "") String token,
            @RequestParam(value = "crate_id") Long crateId,
            @RequestParam(value = "user_id") Long userId
    )
    {
        if ( auth.checkAuth( token ).status == 25 ) {
            return crateHandler.addUser( userHandler.get( token ), userHandler.get( userId ), crateId );
        } else {
            return true;
        }
    }

    @RequestMapping(value = "/del-user", method = RequestMethod.POST)
    @ResponseBody
    public boolean deleteUser(
            @RequestParam(value = "token", defaultValue = "") String token,
            @RequestParam(value = "crate_id") Long crateId,
            @RequestParam(value = "user_id") Long userId
    )
    {
        if ( auth.checkAuth( token ).status == 25 ) {
            return crateHandler.deleteUser( userHandler.get( token ), userHandler.get( userId ), crateId );
        } else {
            return false;
        }
    }

    @RequestMapping(value = "/add-wishlist", method = RequestMethod.POST)
    @ResponseBody
    public boolean deleteUser(
            @RequestParam(value = "token", defaultValue = "") String token,
            @RequestParam(value = "crate_id") Long crateId,
            @RequestParam(value = "label") String label
    )
    {
        if ( auth.checkAuth( token ).status == 25 ) {
            return crateHandler.addWishList( userHandler.get( token ),crateId, label);
        } else {
            return false;
        }
    }

    @RequestMapping(value = "/del-wishlist", method = RequestMethod.POST)
    @ResponseBody
    public boolean deleteUser(
            @RequestParam(value = "token", defaultValue = "") String token,
            @RequestParam(value = "wishlist_id") Long listId
    )
    {
        if ( auth.checkAuth( token ).status == 25 ) {
            return crateHandler.deleteWishList( userHandler.get( token ), wishListHandler.get( listId ) );
        } else {
            return false;
        }
    }
}

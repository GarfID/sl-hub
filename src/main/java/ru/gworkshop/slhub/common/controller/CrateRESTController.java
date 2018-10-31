package ru.gworkshop.slhub.common.controller;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.gworkshop.slhub.common.model.entity.Crate;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.service.CrateHandler;
import ru.gworkshop.slhub.common.service.UserHandler;

import java.security.AccessControlException;
import java.util.List;

@Controller
@CrossOrigin(origins = { "http://localhost:4200", "https://sl-hub.g-workshop.ru" })
@RequestMapping("/crate")
public class CrateRESTController
{
    private final UserHandler userHandler;
    private final CrateHandler crateHandler;

    @Autowired
    public CrateRESTController( UserHandler userHandler, CrateHandler crateHandler )
    {
        this.userHandler = userHandler;
        this.crateHandler = crateHandler;
    }

    @RequestMapping(value = "/get", method = RequestMethod.POST)
    @ResponseBody
    public List<Crate> getCurrentUserCrates( @RequestParam(value = "token") String token )
    {
        try {
            User user = userHandler.get( token );
            return this.crateHandler.getByUser( user );
        } catch (ObjectNotFoundException ignore) {
            return null;
        }
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public Boolean createCrate(
            @RequestParam(value = "token", defaultValue = "") String token, @RequestParam(value = "label") String label
    )
    {
        try {
            User user = userHandler.get( token );
            return this.crateHandler.create( user, label );
        } catch (ObjectNotFoundException ign) {
            return false;
        }
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    public Boolean deleteCrate(
            @RequestParam(value = "token", defaultValue = "") String token,
            @RequestParam(value = "crate_id") Long crateId
    )
    {
        try {
            User user = this.userHandler.get( token );
            return this.crateHandler.delete( user, crateId );
        } catch (ObjectNotFoundException | AccessControlException ign) {
            return false;
        }
    }

    @RequestMapping(value = "/add-user", method = RequestMethod.POST)
    @ResponseBody
    public Boolean addUser(
            @RequestParam(value = "token", defaultValue = "") String token,
            @RequestParam(value = "crate_id") Long crateId,
            @RequestParam(value = "user_id") Long userId,
            @RequestParam(value = "privileges") Boolean[] privileges
    )
    {
        try {
            User currentUser = this.userHandler.get( token );
            User user = this.userHandler.get( userId );
            return this.crateHandler.addUser(currentUser, crateId, user, privileges);
        } catch (ObjectNotFoundException | AccessControlException ign) {
            return false;
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
        try {
            User currentUser = this.userHandler.get( token );
            User user = this.userHandler.get( userId );
            return this.crateHandler.delUser(currentUser, crateId, user);
        } catch (ObjectNotFoundException | AccessControlException ign) {
            return false;
        }
    }

    @RequestMapping(value = "/upd-user", method = RequestMethod.POST)
    @ResponseBody
    public boolean updateUserCratePrivileges(
            @RequestParam(value = "token", defaultValue = "") String token,
            @RequestParam(value = "crate_id") Long crateId,
            @RequestParam(value = "user_id") Long userId,
            @RequestParam(value = "privileges") Boolean[] privileges
    )
    {
        try {
            User currentUser = this.userHandler.get( token );
            User user = this.userHandler.get( userId );
            return this.crateHandler.updateUserCratePrivileges(currentUser, crateId, user, privileges);
        } catch (ObjectNotFoundException | AccessControlException ign) {
            return false;
        }
    }
}

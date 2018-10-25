package ru.gworkshop.slhub.common.service;

import org.hibernate.ObjectNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gworkshop.slhub.common.model.entity.Crate;
import ru.gworkshop.slhub.common.model.entity.CrateUser;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.model.repository.CrateRepository;

import java.security.AccessControlException;
import java.util.List;
import java.util.Optional;

@Service
public class CrateHandler
{
    private Logger logger = LoggerFactory.getLogger( CrateHandler.class );
    private final CrateRepository crateRepository;

    @Autowired
    public CrateHandler( CrateRepository crateRepository )
    {
        this.crateRepository = crateRepository;
    }

    public Crate get( Long id )
    {
        Optional<Crate> optionalCrate = crateRepository.findById( id );
        if ( optionalCrate.isPresent() ) { return optionalCrate.get(); } else {
            throw new IllegalArgumentException( "No crate with ID " + id.toString() );
        }
    }

    public List<Crate> getByUser( User user )
    {
        return crateRepository.findByUser( user );
    }

    public Boolean create( User user, String label )
    {
        Crate crate = Crate.builder()
                           .label( label )
                           .build();
        if(crate.addUser( user, new Boolean[] {true, true, true} )) {
            this.crateRepository.save( crate );
            return true;
        } else {
            return false;
        }
    }

    public Boolean delete( User user, Long crateId ) throws AccessControlException, ObjectNotFoundException
    {
        Optional<Crate> optionalCrate = this.crateRepository.findById( crateId );
        if ( optionalCrate.isPresent() ) {
            Crate crate = optionalCrate.get();
            CrateUser crateUser = crate.getCrateUsers()
                                       .stream()
                                       .filter( curCrateUser -> user.equals( curCrateUser.getUser() ) )
                                       .findAny()
                                       .orElse( null );
            if ( crateUser != null ) {
                if ( crateUser.getCanDestroy() ) {
                    this.crateRepository.delete( crate );
                    return true;
                } else {
                    throw new AccessControlException( "permission denied for users " + user.getId() + " to delete " +
                                                              "crate " + crateId );
                }
            } else {
                throw new ObjectNotFoundException( "users", "crate" );
            }
        } else {
            throw new ObjectNotFoundException( "id", "crate" );
        }
    }

    public Boolean addUser( User currentUser, Long crateId, User user, Boolean[] grantOptions )
    throws IllegalArgumentException, ObjectNotFoundException, AccessControlException
    {
        Optional<Crate> optionalCrate = this.crateRepository.findById( crateId );
        if ( optionalCrate.isPresent() ) {
            Crate crate = optionalCrate.get();
            CrateUser crateUser = crate.getCrateUsers()
                                       .stream()
                                       .filter( curCrateUser -> currentUser.equals( curCrateUser.getUser() ) )
                                       .findAny()
                                       .orElse( null );
            if ( crateUser != null ) {
                if ( crateUser.getCanGrant() ) {
                    if(crate.addUser( user, grantOptions )) {
                        this.crateRepository.save( crate );
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    throw new AccessControlException( "permission denied for users " + currentUser.getId() + " to " +
                                                              "add users " + user.getId() + " to crate " + crateId );
                }
            } else {
                throw new ObjectNotFoundException( "users", "crate" );
            }
        } else {
            throw new ObjectNotFoundException( "id", "crate" );
        }
    }

    public Boolean delUser( User currentUser, Long crateId, User user )
    {
        if ( !currentUser.equals( user ) ) {
            Optional<Crate> optionalCrate = this.crateRepository.findById( crateId );
            if ( optionalCrate.isPresent() ) {
                Crate crate = optionalCrate.get();
                CrateUser crateUser = crate.getCrateUsers()
                                           .stream()
                                           .filter( curCrateUser -> currentUser.equals( curCrateUser.getUser() ) )
                                           .findAny()
                                           .orElse( null );
                if ( crateUser != null ) {
                    if ( crateUser.getCanGrant() ) {
                        crate.deleteUser( user );
                        this.crateRepository.save( crate );
                        return true;
                    } else {
                        throw new AccessControlException( "permission denied for users " + currentUser.getId() + " to "
                                                                  + "delete users " + user.getId() + " to crate " + crateId );
                    }
                } else {
                    throw new ObjectNotFoundException( "users", "crate" );
                }
            } else {
                throw new ObjectNotFoundException( "id", "crate" );
            }
        } else {
            throw new AccessControlException( "users " + currentUser.getId() + " can't delete self" );
        }
    }
}

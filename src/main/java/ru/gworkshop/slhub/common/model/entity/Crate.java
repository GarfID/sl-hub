package ru.gworkshop.slhub.common.model.entity;

import lombok.*;
import lombok.extern.log4j.Log4j2;
import ru.gworkshop.slhub.wishlist.model.entity.WishList;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "hub_crate")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@EqualsAndHashCode
@Log4j2
public class Crate
{
    @Id
    @Getter
    @GeneratedValue
    private Long id;

    @Getter
    @NotNull
    private String label;

    @Getter
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "crate", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CrateUser> crateUsers = new HashSet<>();

    @Getter
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "crate", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<WishList> crateWishLists = new HashSet<>();

    public User getOwner()
    {
        if ( this.crateUsers == null ) {
            throw new RuntimeException( "No users in Crate " + this.id );
        } else {
            for ( CrateUser crateUser : crateUsers ) {
                if ( crateUser.getIsOwner() ) {
                    return crateUser.getUser();
                }
            }

            throw new RuntimeException( "No owner user in Crate " + this.id );
        }
    }

    public boolean addCrateUser( CrateUser crateUser )
    {
        if ( this.crateUsers == null ) {
            this.crateUsers = new HashSet<>();
        }
        this.crateUsers.add( crateUser );
        return true;
    }

    public boolean removeCrateUser( CrateUser crateUser )
    {
        if ( this.crateUsers == null ) {
            return false;
        } else {
            this.crateUsers.remove( crateUser );
            return true;
        }
    }

    public boolean addCrateList( WishList wishList )
    {
        if ( this.crateWishLists == null ) {
            this.crateWishLists = new HashSet<>();
        }
        this.crateWishLists.add( wishList );
        return true;
    }

    public boolean removeCrateWishList( WishList wishList )
    {
        if ( this.crateUsers == null ) {
            return false;
        } else {
            this.crateWishLists.remove( wishList );
            return true;
        }
    }
}

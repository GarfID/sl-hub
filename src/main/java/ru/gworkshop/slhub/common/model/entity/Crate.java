package ru.gworkshop.slhub.common.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import lombok.extern.log4j.Log4j2;
import org.hibernate.ObjectNotFoundException;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    @Column(nullable = false)
    private String label;

    @Getter
    @EqualsAndHashCode.Exclude
    @JsonBackReference
    @OneToMany(mappedBy = "crate", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<CrateUser> crateUsers;

    //TODO: add check for preventing duplicates
    public Boolean addUser( User user, Boolean[] privileges )
    {
        if(privileges.length == 3) {
            CrateUser newCrateUser = CrateUser.builder()
                                              .crate( this )
                                              .user( user )
                                              .canEdit( privileges[ 0 ] )
                                              .canDestroy( privileges[ 1 ] )
                                              .canGrant( privileges[ 2 ] )
                                              .build();
            if ( this.crateUsers == null ) {
                this.crateUsers = new ArrayList<>();
            }
            this.crateUsers.add( newCrateUser );
            return true;
        } else {
            throw new IllegalArgumentException( "Incorrect grant options" );
        }
    }

    public void deleteUser( User user ) throws ObjectNotFoundException
    {
        if(this.crateUsers != null) {
            this.crateUsers.removeIf(curCrateUser-> curCrateUser.getUser().equals( user ) );
        }
    }

    public void updateUserPrivileges( CrateUser user, Boolean[] privileges )
    {
        int index = this.crateUsers.indexOf( user );
        CrateUser targetCrateUser = this.crateUsers.get( index );

        targetCrateUser.setCanEdit( privileges[0] );
        targetCrateUser.setCanDestroy( privileges[1] );
        targetCrateUser.setCanGrant( privileges[2] );

        this.crateUsers.set( index, targetCrateUser );
    }
}

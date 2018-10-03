package ru.gworkshop.slhub.common.model.entity;

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
    @OneToMany(mappedBy = "crate", cascade = CascadeType.ALL)
    private List<CrateUser> crateUsers;

    //TODO: add check for preventing duplicates
    public Boolean addUser( User user, Boolean[] grantOptions )
    {
        if(grantOptions.length == 3) {
            CrateUser newCrateUser = CrateUser.builder()
                                              .crate( this )
                                              .user( user )
                                              .canEdit( grantOptions[ 0 ] )
                                              .canDestroy( grantOptions[ 1 ] )
                                              .canGrant( grantOptions[ 2 ] )
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
            this.crateUsers.removeIf(curCrateUser-> curCrateUser.getUser() == user  );
        }
    }
}

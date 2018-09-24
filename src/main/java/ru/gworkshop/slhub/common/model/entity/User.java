package ru.gworkshop.slhub.common.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;
import lombok.extern.log4j.Log4j2;
import ru.gworkshop.slhub.common.model.serializers.UserSerializer;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "hub_user")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Log4j2
@EqualsAndHashCode
@JsonSerialize(using = UserSerializer.class)
public class User
{
    @Id
    @Getter
    @GeneratedValue
    private Long id;

    @Email
    @Getter
    @NotNull
    @EqualsAndHashCode.Exclude
    private String email;

    @NotNull
    @Getter
    @Size(max = 64)
    private String googleId;

    @NonNull
    @Getter
    @Setter
    @Size(max = 128)
    @EqualsAndHashCode.Exclude
    private String state;

    @NotNull
    @Getter
    @EqualsAndHashCode.Exclude
    private Boolean isAdmin;

    @JsonIgnore
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CrateUser> crateUsers;

    public Set<Crate> getUserCrates()
    {
        Set<Crate> resoult = new HashSet<>();
        if ( crateUsers != null ) {
            for ( CrateUser crateUser : crateUsers ) {
                resoult.add( crateUser.getCrate() );
            }
        }
        return resoult;
    }
}
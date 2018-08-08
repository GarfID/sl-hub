package ru.gworkshop.slhub.model.entity;

import lombok.*;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name = "hub_user")
@Builder
@Data
@ToString
@Log4j2
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @Email
    @NotNull
    private String email;

    @NotNull
    @Size(max = 64)
    @Column(name = "google_id")
    private String googleId;

    @Size(min = 4)
    private String login;

    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CrateUser> crateUsers;
}

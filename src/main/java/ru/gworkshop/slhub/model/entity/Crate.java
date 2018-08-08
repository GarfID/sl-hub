package ru.gworkshop.slhub.model.entity;

import lombok.Builder;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "hub_crate")
@Builder
@ToString
@Log4j2
public class Crate {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String label;

    @OneToMany(mappedBy = "crate", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CrateUser> crateUsers;
}

package ru.gworkshop.slhub.common.model.entity;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "hub_crate_user")
@Builder
@Data
@ToString
@Log4j2
public class CrateUser {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "crate_id")
    private Crate crate;

    @NotNull
    @Column(name = "is_owner")
    private boolean isOwner;
}

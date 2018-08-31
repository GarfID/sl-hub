package ru.gworkshop.slhub.common.model.entity;

import lombok.*;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "hub_crate_user")
@Builder
@Data
@ToString
@EqualsAndHashCode
@Log4j2
public class CrateUser
{
    @Id
    @GeneratedValue
    @EqualsAndHashCode.Exclude
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @Getter
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "crate_id")
    @Getter
    private Crate crate;

    @NotNull
    @Column(name = "is_owner")
    @Getter
    @EqualsAndHashCode.Exclude
    private Boolean isOwner;
}

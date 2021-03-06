package ru.gworkshop.slhub.wishlist.model.entity;

import lombok.Builder;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "wl_priority")
@Builder
@ToString
@Log4j2
public class Priority {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "list_id")
    private WishList wishList;

    @NotNull
    @Size(max = 16)
    private String name;

    @Column(name = "`order`", unique=true)
    private int order;
}

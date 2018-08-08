package ru.gworkshop.slhub.wishlist.model.entity;

import lombok.Builder;
import javax.validation.constraints.NotNull;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import ru.gworkshop.slhub.model.entity.Crate;

import javax.persistence.*;
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

    @ManyToOne
    @JoinColumn(name = "crate_id")
    private Crate crate;

    @NotNull
    @Size(max = 16)
    private String name;

    @Column(name = "`order`", unique=true)
    private int order;
}

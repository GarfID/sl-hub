package ru.gworkshop.slhub.wishlist.model.entity;

import lombok.Builder;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import ru.gworkshop.slhub.common.model.entity.Crate;
import ru.gworkshop.slhub.inventory.model.entity.Item;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "wl_list")
@Builder
@ToString
@Log4j2
public class List {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "crate_id")
    private Crate crate;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name = "priority_id")
    private Priority priority;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToMany(mappedBy = "list")
    private Set<TagList> tagLists;
}

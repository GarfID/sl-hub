package ru.gworkshop.slhub.inventory.model.entity;

import lombok.Builder;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "inv_item_shop")
@Builder
@ToString
@Log4j2
public class ItemShop {
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String name;

    @URL
    @Column(unique = true)
    private String url;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Item> shopItems;
}

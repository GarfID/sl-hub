package ru.gworkshop.slhub.inventory.model.entity;

import lombok.Builder;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "inv_item")
@Builder
@ToString
@Log4j2
public class Item {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String name;

    @URL
    @NotNull
    @Column(unique = true)
    private String  url;

    @URL
    @NotNull
    private String img;

    @NotNull
    private Integer price;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Frankness frankness;

    @ManyToOne
    @JoinColumn(name = "shop_id")
    private ItemShop shop;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private ItemCategory category;
}

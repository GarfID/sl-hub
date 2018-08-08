package ru.gworkshop.slhub.model.entity;

import lombok.Builder;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;

@Entity
@Table(name = "hub_item_shop")
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
}

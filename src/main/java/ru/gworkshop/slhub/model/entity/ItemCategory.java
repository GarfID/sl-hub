package ru.gworkshop.slhub.model.entity;

import lombok.Builder;
import javax.validation.constraints.NotNull;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "hub_item_category")
@Builder
@ToString
@Log4j2
public class ItemCategory {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Size(max = 64)
    private String name;

    @OneToOne
    @JoinColumn(name = "parent")
    private ItemCategory parent;
}

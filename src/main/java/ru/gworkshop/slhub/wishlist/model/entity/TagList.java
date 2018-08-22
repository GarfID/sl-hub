package ru.gworkshop.slhub.wishlist.model.entity;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;

@Entity
@Table(name = "wl_tag_list")
@Builder
@Data
@ToString
@Log4j2
public class TagList {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "list_id")
    private List list;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;
}
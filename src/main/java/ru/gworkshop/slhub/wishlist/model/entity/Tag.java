package ru.gworkshop.slhub.wishlist.model.entity;

import lombok.Builder;
import lombok.Data;
import javax.validation.constraints.NotNull;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import ru.gworkshop.slhub.model.entity.Crate;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name = "wl_tag")
@Builder
@Data
@ToString
@Log4j2
public class Tag {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "crate_id")
    private Crate crate;

    @NotNull
    @Size(max = 16)
    private String label;

    @OneToMany(mappedBy = "tag", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<TagList> tagLists;
}

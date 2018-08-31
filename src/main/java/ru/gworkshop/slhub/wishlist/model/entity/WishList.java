package ru.gworkshop.slhub.wishlist.model.entity;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import ru.gworkshop.slhub.common.model.entity.Crate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "wl_list")
@Builder
@ToString
@Log4j2
@EqualsAndHashCode
public class WishList
{
    @Id
    @GeneratedValue
    private Long id;

    @Getter
    @NotNull
    private String label;

    @Getter
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "crate_id")
    private Crate crate;

    @Getter
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "wishList", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<WishListItem> wishListItems;

    @Getter
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "wishList", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Tag> listTags;

    @Getter
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "wishList", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Priority> listPriorities;
}

//Юринститут бакалавры
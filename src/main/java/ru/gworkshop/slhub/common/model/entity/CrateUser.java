package ru.gworkshop.slhub.common.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;

@Entity
@Table(name = "hub_crate_user")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@EqualsAndHashCode
@Log4j2
public class CrateUser
{
    @Id
    @JsonIgnore
    @GeneratedValue
    @EqualsAndHashCode.Exclude
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @Getter
    private User user;

    @JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "crate_id")
    private Crate crate;

    @Setter
    @Getter
    @Column(nullable = false)
    private Boolean canEdit;

    @Setter
    @Getter
    @Column(nullable = false)
    private Boolean canDestroy;

    @Setter
    @Getter
    @Column(nullable = false)
    private Boolean canGrant;
}

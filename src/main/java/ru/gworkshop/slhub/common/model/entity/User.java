package ru.gworkshop.slhub.common.model.entity;

import lombok.*;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity
@Table(name = "hub_user")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Log4j2
@EqualsAndHashCode
public class User
{
    @Id
    @Getter
    @EqualsAndHashCode.Exclude
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @Getter
    @EqualsAndHashCode.Exclude
    @Column(nullable = false, unique = true)
    private String email;

    @Getter
    @Size(max = 64)
    @Column(nullable = false)
    private String googleId;

    @Getter
    @EqualsAndHashCode.Exclude
    @Column(nullable = false)
    private Boolean isAdmin;
}
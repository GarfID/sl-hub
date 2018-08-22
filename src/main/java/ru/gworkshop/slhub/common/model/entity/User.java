package ru.gworkshop.slhub.common.model.entity;

import lombok.*;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name = "hub_user")
@Builder
@Data
@ToString
@Log4j2
public class User
{
	@Id
	@Getter
	@GeneratedValue
	private Long id;

	@Email
	@Getter
	@NotNull
	private String email;

	@NotNull
	@Getter
	@Size(max = 64)
	private String googleId;

	@NonNull
	@Getter
	@Setter
	@Size(max = 128)
	private String state;

	@NotNull
	@Getter
	private Boolean isAdmin;

	@Getter
	@Setter
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<CrateUser> crateUsers;
}

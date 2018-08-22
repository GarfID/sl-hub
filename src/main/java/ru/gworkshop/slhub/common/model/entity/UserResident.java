package ru.gworkshop.slhub.common.model.entity;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "hub_user_resident")
@Builder
@Data
@ToString
@Log4j2
public class UserResident
{
	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@Size(min = 4)
	@NotNull
	private String login;

	@NotNull
	private String password;
}

package ru.gworkshop.slhub.common.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "https://sl-hub.g-workshop.ru/"})
@RequestMapping("/user")
public class DevController {
}

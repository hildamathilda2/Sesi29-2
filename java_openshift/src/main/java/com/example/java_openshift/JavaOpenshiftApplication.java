package com.example.java_openshift;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class JavaOpenshiftApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaOpenshiftApplication.class, args);
	}

	@GetMapping("/")
	public String hello() {
		return "Hello, OpenShift! good evening";
	}

}
package com.example.api.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "users")
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;

}

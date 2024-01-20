package com.example.api.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.List;

@Getter
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    private String id;
    private String name;
    private String email;
    private String imageUrl;

    @OneToMany(mappedBy = "customer")
    private List<Invoice> invoices;

}

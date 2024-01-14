package com.example.product.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productName;
    private int price;
    private Integer discountPrice;
    private String thumbnailImagePath;

    @Builder
    public Product(Long id, String productName, int price, Integer discountPrice, String thumbnailImagePath) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.discountPrice = discountPrice;
        this.thumbnailImagePath = thumbnailImagePath;
    }
}

package com.example.product.common.config;

import com.example.product.domain.entity.Product;
import com.example.product.domain.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class ProductsLoad implements ApplicationRunner {

    private final ProductRepository productRepository;

    @Override
    public void run(ApplicationArguments args) {
        List<Product> products = new ArrayList<>();
        for (int i = 0; i < 10_000; i++) {
            Product product = Product.builder()
                    .productName("상품명 " + i)
                    .price(10_000)  // 가격은 예시로 고정값 사용
                    .thumbnailImagePath("http//localhost:3000/public/images/thumbnail_sample.jpg")
                    .build();
            products.add(product);
        }

        productRepository.saveAll(products);
    }

}

package com.example.product.common.config;

import com.example.product.domain.entity.Product;
import com.example.product.domain.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Configuration
@RequiredArgsConstructor
public class ProductsLoad implements ApplicationRunner {

    private final ProductRepository productRepository;

    @Override
    public void run(ApplicationArguments args) {
        List<Product> products = new ArrayList<>();
        for (int i = 0; i < 10_000; i++) {
            int min1 = 5000;
            int max1 = 30000;
            int min2 = 1000;
            int max2 = 4000;
            Random random = new Random();

            int price = random.nextInt((max1 - min1) + 1) + min1;

            Integer discountPrice = random.nextDouble() < 0.7 ?
                    random.nextInt((max2 - min2) + 1) + min2 : null;

            Product product = Product.builder()
                    .productName("상품명 " + i)
                    .price(price)
                    .discountPrice(discountPrice)
                    .thumbnailImagePath("http//localhost:3000/public/images/thumbnail_sample.jpg")
                    .build();
            products.add(product);
        }

        productRepository.saveAll(products);
    }

}

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
            int priceMin = 20000;
            int priceMax = 30000;
            int discountPriceMin = 15000;
            int discountPriceMax = 25000;
            Random random = new Random();

            int price = random.nextInt((priceMax - priceMin) + 1) + priceMin;

            Integer discountPrice = random.nextDouble() < 0.7 ?
                    random.nextInt((discountPriceMax - discountPriceMin) + 1) + discountPriceMin : null;

            if (discountPrice != null && price < discountPrice) {
                discountPrice = price - 3000;
            }

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

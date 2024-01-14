package com.example.product.controller;

import com.example.product.common.dto.BaseResponse;
import com.example.product.common.dto.CommonResponse;
import com.example.product.domain.entity.Product;
import com.example.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping(path = "/products", produces = "application/json")
    public ResponseEntity<BaseResponse<Page<Product>>> findProducts(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return CommonResponse.success(productService.findProducts(page, size));
    }

}

package com.example.product.common.dto;

import lombok.Getter;
import org.springframework.http.ResponseEntity;

@Getter
public class CommonResponse {

    private CommonResponse() {}

    public static <T> ResponseEntity<BaseResponse<T>> success(final T data) {
        return ResponseEntity.ok(new BaseResponse<>(data));
    }

    public static <T> ResponseEntity<BaseResponse<T>> fail(final String message, final T data) {
        return ResponseEntity.ok(new BaseResponse<>("fail", message, data));
    }
}

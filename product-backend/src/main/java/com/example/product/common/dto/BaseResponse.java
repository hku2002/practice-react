package com.example.product.common.dto;

import lombok.Getter;

@Getter
public class BaseResponse<T> {

    private final String status;
    private final String message;
    private T data;

    public BaseResponse() {
        this.status = "success";
        this.message = "";
    }

    public BaseResponse(T data) {
        this.status = "success";
        this.message = "";
        this.data = data;
    }

    public BaseResponse(String status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

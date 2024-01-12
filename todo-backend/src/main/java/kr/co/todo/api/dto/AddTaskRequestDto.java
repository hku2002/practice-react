package kr.co.todo.api.dto;

import lombok.Getter;

@Getter
public class AddTaskRequestDto {

    private Long todoId;
    private String task;

}

package kr.co.todo.api.dto;

import lombok.Getter;

@Getter
public class ChangeCompletedRequestDto {

    private Long taskId;
    private boolean completed;

}

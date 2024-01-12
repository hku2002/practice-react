package kr.co.todo.api.dto;

import java.time.LocalDate;
import lombok.Getter;

@Getter
public class AddTodoRequestDto {

    private String title;
    private LocalDate date;

}

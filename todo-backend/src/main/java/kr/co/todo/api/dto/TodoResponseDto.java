package kr.co.todo.api.dto;

import kr.co.todo.api.domain.entity.Todo;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;

@Getter
public class TodoResponseDto {

    private Long id;
    private String title;
    private LocalDate date;
    private List<TaskResponseDto> tasks;

    @Builder
    public TodoResponseDto(Long id, String title, LocalDate date, List<TaskResponseDto> tasks) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.tasks = tasks;
    }

    public static TodoResponseDto from(Todo todo) {
        return TodoResponseDto.builder()
            .id(todo.getId())
            .title(todo.getTitle())
            .date(todo.getDate())
            .tasks(todo.getTasks().stream()
                .map(TaskResponseDto::from)
                .toList())
            .build();
    }

    public static List<TodoResponseDto> from(List<Todo> todo) {
        return todo.stream()
            .map(TodoResponseDto::from)
            .toList();
    }
}

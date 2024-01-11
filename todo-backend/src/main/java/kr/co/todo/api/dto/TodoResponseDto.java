package kr.co.todo.api.dto;

import kr.co.todo.api.domain.entity.Task;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class TodoResponseDto {

    private Long id;
    private String title;
    private List<TaskResponseDto> tasks;

    @Builder
    public TodoResponseDto(Long id, String title, List<TaskResponseDto> tasks) {
        this.id = id;
        this.title = title;
        this.tasks = tasks;
    }

    public static TodoResponseDto from(List<Task> tasks) {
        if (tasks.isEmpty()) {
            return TodoResponseDto.builder().build();
        }
        return TodoResponseDto.builder()
                .id(tasks.get(0).getTodo().getId())
                .title(tasks.get(0).getTodo().getTitle())
                .tasks(TaskResponseDto.from(tasks))
                .build();
    }
}

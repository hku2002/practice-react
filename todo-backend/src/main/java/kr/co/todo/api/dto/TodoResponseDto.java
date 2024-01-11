package kr.co.todo.api.dto;

import kr.co.todo.api.domain.entity.Task;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class TodoResponseDto {

    private Long id;
    private String title;
    private LocalDateTime date;
    private List<TaskResponseDto> tasks;

    @Builder
    public TodoResponseDto(Long id, String title, LocalDateTime date, List<TaskResponseDto> tasks) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.tasks = tasks;
    }

    public static TodoResponseDto from(List<Task> tasks) {
        if (tasks.isEmpty()) {
            return TodoResponseDto.builder().build();
        }
        return TodoResponseDto.builder()
                .id(tasks.get(0).getTodo().getId())
                .title(tasks.get(0).getTodo().getTitle())
                .date(tasks.get(0).getTodo().getDate())
                .tasks(TaskResponseDto.from(tasks))
                .build();
    }
}

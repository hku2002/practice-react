package kr.co.todo.api.dto;

import kr.co.todo.api.domain.entity.Task;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class TaskResponseDto {

    private Long id;
    private String task;
    private boolean isCompleted;

    @Builder
    public TaskResponseDto(Long id, String task, boolean isCompleted) {
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
    }

    public static TaskResponseDto from(Task task) {
        return TaskResponseDto.builder()
                .id(task.getId())
                .task(task.getTask())
                .isCompleted(task.isCompleted())
                .build();
    }

    public static List<TaskResponseDto> from(List<Task> tasks) {
        return tasks.stream()
                .map(TaskResponseDto::from)
                .toList();
    }
}

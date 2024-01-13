package kr.co.todo.api.domain.entity;

import jakarta.persistence.*;
import kr.co.todo.api.dto.AddTaskRequestDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String task;
    private boolean isCompleted;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "todo_id", referencedColumnName = "id", updatable = false)
    private Todo todo;

    @Builder
    public Task(Long id, String task, boolean isCompleted, Todo todo) {
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
        this.todo = todo;
    }

    public void addTodo(Todo todo) {
        this.todo = todo;
        if (!todo.getTasks().contains(this)) {
            todo.getTasks().add(this);
        }
    }

    public static Task createInstance(AddTaskRequestDto requestDto, Todo todo) {
        return kr.co.todo.api.domain.entity.Task.builder()
                .task(requestDto.getTask())
                .isCompleted(false)
                .todo(todo)
                .build();
    }

    public void changeCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }
}

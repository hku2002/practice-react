package kr.co.todo.api.domain.entity;

import jakarta.persistence.*;
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
    @ManyToOne
    private Todo todo;

    @Builder
    public Task(Long id, String task, Todo todo) {
        this.id = id;
        this.task = task;
        this.todo = todo;
    }
}

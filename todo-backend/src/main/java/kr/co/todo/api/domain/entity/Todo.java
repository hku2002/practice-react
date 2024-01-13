package kr.co.todo.api.domain.entity;

import jakarta.persistence.*;
import kr.co.todo.api.dto.AddTodoRequestDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private LocalDate date;
    @OneToMany(mappedBy = "todo", cascade = CascadeType.PERSIST)
    private List<Task> tasks = new ArrayList<>();

    @Builder
    public Todo(Long id, String title, LocalDate date, List<Task> tasks) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.tasks = tasks;
    }

    public void addTask(Task task) {
        tasks.add(task);
        if (task.getTodo() != this) {
            task.addTodo(this);
        }
    }

    public static Todo createInstance(AddTodoRequestDto requestDto) {
        return Todo.builder()
            .title(requestDto.getTitle())
            .date(requestDto.getDate())
            .build();
    }
}

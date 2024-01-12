package kr.co.todo.api.domain.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import kr.co.todo.api.dto.AddTodoRequestDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private LocalDateTime date;
    @OneToMany(mappedBy = "todo", cascade = CascadeType.PERSIST)
    private List<Task> tasks = new ArrayList<>();

    @Builder
    public Todo(Long id, String title, LocalDateTime date, List<Task> tasks) {
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
            .date(requestDto.getDate().atTime(LocalTime.now()))
            .build();
    }
}

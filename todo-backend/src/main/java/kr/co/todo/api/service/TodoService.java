package kr.co.todo.api.service;

import kr.co.todo.api.domain.entity.Task;
import kr.co.todo.api.domain.repository.TaskRepository;
import kr.co.todo.api.dto.TodoResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TaskRepository taskRepository;

    public TodoResponseDto getTasks(Long todoId) {
        List<Task> tasks = taskRepository.findTodoAll(todoId);
        return TodoResponseDto.from(tasks);
    }

}

package kr.co.todo.api.service;

import java.util.List;
import kr.co.todo.api.domain.entity.Todo;
import kr.co.todo.api.domain.repository.TodoRepository;
import kr.co.todo.api.dto.AddTodoRequestDto;
import kr.co.todo.api.dto.TodoResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TodoService {

    private final TodoRepository todoRepository;

    public List<TodoResponseDto> getTasks() {
        List<Todo> todos = todoRepository.findAll();
        return TodoResponseDto.from(todos);
    }

    public void addTodo(AddTodoRequestDto requestDto) {
        todoRepository.save(Todo.createInstance(requestDto));
    }

}

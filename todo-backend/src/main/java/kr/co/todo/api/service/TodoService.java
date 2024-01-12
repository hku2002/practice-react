package kr.co.todo.api.service;

import kr.co.todo.api.domain.entity.Task;
import kr.co.todo.api.domain.entity.Todo;
import kr.co.todo.api.domain.repository.TaskRepository;
import kr.co.todo.api.domain.repository.TodoRepository;
import kr.co.todo.api.dto.TodoResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TodoService {

    private final TodoRepository todoRepository;

    public List<TodoResponseDto> getTasks() {
        List<Todo> todos = todoRepository.findAll();
        return TodoResponseDto.from(todos);
    }

}

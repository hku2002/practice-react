package kr.co.todo.api.service;

import kr.co.todo.api.domain.entity.Task;
import kr.co.todo.api.domain.entity.Todo;
import kr.co.todo.api.domain.repository.TaskRepository;
import kr.co.todo.api.domain.repository.TodoRepository;
import kr.co.todo.api.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TodoService {

    private final TodoRepository todoRepository;
    private final TaskRepository taskRepository;

    public List<TodoResponseDto> getTasks() {
        List<Todo> todos = todoRepository.findAll();
        return TodoResponseDto.from(todos);
    }

    @Transactional
    public void addTodo(AddTodoRequestDto requestDto) {
        todoRepository.save(Todo.createInstance(requestDto));
    }

    @Transactional
    public void deleteTodo(Long id) {
        taskRepository.deleteAllByTodoId(id);
        todoRepository.deleteById(id);
    }

    @Transactional
    public TaskResponseDto addTask(AddTaskRequestDto requestDto) {
        Todo todo = todoRepository.findById(requestDto.getTodoId()).orElseThrow();
        Task task = Task.createInstance(requestDto, todo);
        taskRepository.save(task);
        return TaskResponseDto.from(task);
    }

    @Transactional
    public void changeCompleted(@RequestBody ChangeCompletedRequestDto requestDto) {
        Task task = taskRepository.findById(requestDto.getTaskId()).orElseThrow();
        task.changeCompleted(requestDto.isCompleted());
    }

    @Transactional
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

}

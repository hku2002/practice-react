package kr.co.todo.api.controller;

import kr.co.todo.api.dto.*;
import kr.co.todo.api.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping("/todos")
    public List<TodoResponseDto> getTasks() {
        return todoService.getTasks();
    }

    @PostMapping("/todo")
    public String addTodo(@RequestBody AddTodoRequestDto requestDto) {
        todoService.addTodo(requestDto);
        return "success";
    }

    @PostMapping("/todo/task")
    public TaskResponseDto addTask(@RequestBody AddTaskRequestDto requestDto) {
        return todoService.addTask(requestDto);
    }

    @DeleteMapping("/todo/task")
    public String deleteTask(@RequestBody DeleteTaskRequestDto requestDto) {
        todoService.deleteTask(requestDto);
        return "success";
    }

}

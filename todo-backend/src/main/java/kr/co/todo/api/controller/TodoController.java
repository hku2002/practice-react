package kr.co.todo.api.controller;

import kr.co.todo.api.dto.TodoResponseDto;
import kr.co.todo.api.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping("/todos")
    public TodoResponseDto getTasks() {
        return todoService.getTasks();
    }

}
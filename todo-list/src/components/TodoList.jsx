import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import TodoTemplate from './TodoTemplate';
import AddTodoTemplate from "./AddTodoTemplate";

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 10px;
  justify-content: center;
`;

const TodoList = () => {

    const apiUrl = 'http://localhost:8080/todos';
    const [todos, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [apiUrl]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setData(updatedTodos);
    };

    return (
        <ColumnGrid>
            {todos.map((todo) => (
                <TodoTemplate
                    key={todo.id}
                    todoId={todo.id}
                    title={todo.title}
                    date={todo.date}
                    tasks={todo.tasks}
                    completed={todo.completed}
                    onRemoveTodo={removeTodo} />
            ))}
            <AddTodoTemplate props={fetchData} />
        </ColumnGrid>
    );
}

export default TodoList

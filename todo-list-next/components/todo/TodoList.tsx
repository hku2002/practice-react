import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import TodoCard from '../../components/todo/TodoCard';
import AddTodoCard from "../../components/todo/AddTodoCard";

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 10px;
  justify-content: center;
`;

const TodoList = ({ initialData, isServer }) => {

    const apiUrl = 'http://localhost:8080/todos';
    const [todos, setData] = useState(initialData);

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
        if (isServer) {
            fetchData();
        }
    }, [fetchData]);

    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setData(updatedTodos);
    };

    return (
        <ColumnGrid>
            {todos.map((todo) => (
                <TodoCard
                    key={todo.id}
                    todoId={todo.id}
                    title={todo.title}
                    date={todo.date}
                    tasks={todo.tasks}
                    completed={todo.completed}
                    onRemoveTodo={removeTodo} />
            ))}
            <AddTodoCard fetchData={fetchData} />
        </ColumnGrid>
    );
}

export default TodoList

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import TodoTemplate from './TodoTemplate';
import AddTodoTemplate from "./AddTodoTemplate";

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5px;
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

    return (
        <ColumnGrid>
            {todos.map((todo) => (
                <TodoTemplate key={todo.id} title={todo.title} date={todo.date} tasks={todo.tasks} />
            ))}
            <AddTodoTemplate props={fetchData}/>
        </ColumnGrid>
    );
}

export default TodoList

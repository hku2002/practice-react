import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoTemplate from './TodoTemplate';

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5px;
`;

const TodoList = () => {

    const apiUrl = 'http://localhost:8080/todos';
    const [todos, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                console.log("json: ", jsonData);
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log("todos: ", todos);

    return (
        <ColumnGrid>
            {todos.map((title) => (
                <TodoTemplate key={title.id} title={title.title} date={title.date} tasks={title.tasks} />
            ))}
        </ColumnGrid>
    );
}

export default TodoList

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoTemplate from './TodoTemplate';

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5px;
`;

const TodoList = () => {

    // const todos = [
    //     {
    //         id: 1,
    //         title: '첫째날 할일',
    //         date: '2024년 1월 11일 목요일',
    //         tasks: [
    //             {
    //                 id: 1,
    //                 task: "task1"
    //             },
    //             {
    //                 id: 2,
    //                 task: "task2"
    //             },
    //             {
    //                 id: 3,
    //                 task: "task2"
    //             },
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: '둘째날 할일',
    //         date: '2024년 1월 12일 금요일',
    //         tasks: [
    //             {
    //                 id: 1,
    //                 task: "task1"
    //             },
    //             {
    //                 id: 2,
    //                 task: "task2"
    //             },
    //             {
    //                 id: 3,
    //                 task: "task2"
    //             },
    //         ]
    //     },
    //     {
    //         id: 3,
    //         title: '셋째날 할일',
    //         date: '2024년 1월 13일 토요일',
    //         tasks: [
    //             {
    //                 id: 1,
    //                 task: "task1"
    //             },
    //             {
    //                 id: 2,
    //                 task: "task2"
    //             },
    //             {
    //                 id: 3,
    //                 task: "task2"
    //             },
    //         ]
    //     },
    // ];

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

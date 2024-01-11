import React from 'react';
import styled from 'styled-components';
import TodoTemplate from './TodoTemplate';

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5px;
`;

const TodoList = () => {

    const titles = [
        { id: 1, title: '첫째날 할일', date: '2024년 1월 11일 목요일' },
        { id: 2, title: '둘째날 할일', date: '2024년 1월 12일 금요일' },
        { id: 3, title: '셋째날 할일', date: '2024년 1월 13일 토요일' },
    ];

    return (
        <TwoColumnGrid>
            {titles.map((title) => (
                <TodoTemplate key={title.id} title={title.title} date={title.date} />
            ))}
        </TwoColumnGrid>
    );
}

export default TodoList

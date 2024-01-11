import React from 'react';
import styled from 'styled-components';
import TodoTemplate from './TodoTemplate';

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const TodoList = () => {

    const titles = [
        { id: 1, title: '첫째날 할일' },
        { id: 2, title: '둘째날 할일' },
        { id: 3, title: '셋째날 할일' },
    ];

    return (
        <TwoColumnGrid>
            {titles.map((title) => (
                <TodoTemplate key={title.id} title={title.title} />
            ))}
        </TwoColumnGrid>
    );
}

export default TodoList

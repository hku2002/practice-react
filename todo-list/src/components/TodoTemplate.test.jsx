import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTemplate from './TodoTemplate';

describe('TodoTemplate Component', () => {
    it('renders todo template with tasks', async () => {
        render(
            <TodoTemplate
                todoId={1}
                title="Sample Todo"
                date="2022-01-01"
                tasks={[
                    { id: 1, task: 'Task 1', completed: false },
                    { id: 2, task: 'Task 2', completed: true },
                ]}
            />
        );

        // TodoTemplate이 렌더링되었는지 확인
        expect(screen.getByText('Sample Todo')).toBeInTheDocument();
        expect(screen.getByText('2022-01-01')).toBeInTheDocument();

        // Task 목록이 렌더링되었는지 확인
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

});

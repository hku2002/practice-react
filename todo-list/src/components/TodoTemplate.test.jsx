import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTemplate from './TodoTemplate';

describe('TodoTemplate Component Test', () => {
    it('TodoTemplate이 올바르게 렌더링 된다.', async () => {
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

    it('Add Task 기능 작동 시 추가된 Task가 올바르게 렌더링 된다.', async () => {
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

        // 새로운 Task 추가
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Task' } });
        fireEvent.click(screen.getByText('Add Task'));

        // 추가된 Task가 렌더링되었는지 확인
        await waitFor(() => expect(screen.getByText('New Task')).toBeInTheDocument());
    });

});

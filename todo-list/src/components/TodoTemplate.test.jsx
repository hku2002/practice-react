import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTemplate from './TodoTemplate';

describe('TodoTemplate Component Test', () => {

    const props = {
        todoId: 1,
        title: 'Sample Todo',
        date: '2022-01-01',
        tasks: [
            { id: 1, task: 'Task 1', completed: false },
            { id: 2, task: 'Task 2', completed: true },
        ]
    };

    it('TodoTemplate이 올바르게 렌더링 된다.', async () => {
        render(
            <TodoTemplate {...props} />
        );

        // TodoTemplate이 렌더링되었는지 확인
        expect(screen.getByText('Sample Todo')).toBeInTheDocument();
        expect(screen.getByText('2022-01-01')).toBeInTheDocument();

        // Task 목록이 렌더링되었는지 확인
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    it('Add Task 버튼 클릭 시 추가된 Task가 올바르게 렌더링 된다.', async () => {
        render(
            <TodoTemplate {...props} />
        );

        // 새로운 Task 추가
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Task' } });
        fireEvent.click(screen.getByText('Add Task'));

        // 추가된 Task가 렌더링되었는지 확인
        await waitFor(() => expect(screen.getByText('New Task')).toBeInTheDocument());
    });

    it('Add Task 버튼 클릭 시 task 데이터가 없으면 alert 메세지가 발생한다.', async () => {
        render(
            <TodoTemplate {...props} />
        );

        // task 입력 없이 Add Task 클릭
        fireEvent.click(screen.getByText('Add Task'));

        // 화면에 경고 메세지가 렌더링 되었는지 확인
        await waitFor(() => {
            expect(screen.getByText('입력된 값이 없습니다.')).toBeInTheDocument();
        });
    });

});

import { rest } from 'msw';
export const handlers = [
    rest.get('http://localhost:8080/todos', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                status: 'success',
                message: '',
                data: {
                    content: [
                        { id: 1, task: 'Task 1', completed: false },
                        { id: 2, task: 'Task 2', completed: true },
                    ],
                },
            }),
        );
    })
]

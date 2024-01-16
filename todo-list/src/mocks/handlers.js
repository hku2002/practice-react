import { rest } from 'msw';
export const handlers = [
    rest.get('http://localhost:8080/todos', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, task: 'Task 1', completed: false },
                { id: 2, task: 'Task 2', completed: true },
            ]),
        );
    }),
    rest.post('http://localhost:8080/todo/task', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                    id: 3,
                    task: 'New Task',
                    completed: false,
                }
            ),
        );
    })
]

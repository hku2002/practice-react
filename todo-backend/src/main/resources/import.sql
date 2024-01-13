INSERT INTO todo (title, date) VALUES ('첫째날 할일', '2024-01-01');
INSERT INTO todo (title, date) VALUES ('둘째날 할일', '2024-01-02');
INSERT INTO todo (title, date) VALUES ('셋째날 할일', '2024-01-03');

INSERT INTO task (task, is_completed, todo_id) VALUES ('Complete homework', true, 1);
INSERT INTO task (task, is_completed, todo_id) VALUES ('Buy groceries', true, 1);
INSERT INTO task (task, is_completed, todo_id) VALUES ('Exercise', false, 1);

INSERT INTO task (task, is_completed, todo_id) VALUES ('Coding', false, 2);
INSERT INTO task (task, is_completed, todo_id) VALUES ('Study', false, 2);
INSERT INTO task (task, is_completed, todo_id) VALUES ('Exercise', false, 2);

INSERT INTO task (task, is_completed, todo_id) VALUES ('Go to work', false, 3);
INSERT INTO task (task, is_completed, todo_id) VALUES ('play game', false, 3);
INSERT INTO task (task, is_completed, todo_id) VALUES ('meet friends', false, 3);

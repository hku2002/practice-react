import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from "../common/Alert";

const TodoContainer = styled.div`
  width: 250px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 35px;
  height: 35px;
  background-color: transparent;
  color: #555;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 5px;
`;

const AddButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #27ae60;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 5px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const TodoTemplate = (props) => {
    const { todoId, title, date } = props;
    const [tasks, setTasks] = useState(props.tasks);
    const [newTask, setNewTask] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const apiUrl = 'http://localhost:8080';

    const handleAlertClose = () => {
        setAlertVisible(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask(todoId, newTask);
        }
    };

    const handleCheckboxChange = async (taskId, completed) => {
        const updateUrl = `${apiUrl}/todo/task`;
        try {
            const response = await fetch(updateUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ taskId, completed }),
            });

            if (response.ok) {
                const updatedTasks = tasks.map(task => {
                    if (task.id === taskId) {
                        return { ...task, completed };
                    }
                    return task;
                });

                setTasks(updatedTasks);
            } else {
                console.error('Server error:', response);
            }
        } catch (e) {
            console.error('Network error:', e);
        }
    };

    const addTask = async (todoId, task) => {
        if (task.trim() === '') {
            setAlertMessage('입력된 값이 없습니다.');
            setAlertVisible(true);
            setAlertIsOpen(true);
            return;
        }

        const addUrl = `${apiUrl}/todo/task`;
        try {
            const response = await fetch(addUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ todoId, task }),
            });

            if (response.ok) {
                const responseData = await response.json();
                setTasks([...tasks, responseData]);
                setNewTask('');
            } else {
                console.error('Server error:', response);
            }
        } catch (e) {
            console.error("Network error: ", e);
        }

    };

    const removeTask = async (id) => {
        const removeUrl = `${apiUrl}/todo/task/${id}`;
        try {
            const response = await fetch(removeUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const updatedTasks = tasks.filter(task => task.id !== id);
                setTasks(updatedTasks);
            } else {
                console.error('Server error:', response);
            }
        } catch (e) {
            console.error('Network error:', e);
        }

    };

    const removeTodo = async (id) => {
        const removeUrl = `${apiUrl}/todo/${id}`;
        try {
            const response = await fetch(removeUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                props.onRemoveTodo(id);
            } else {
                console.error('Server error:', response);
            }
        } catch (e) {
            console.error('Network error:', e);
        }
    }

    return (
        <TodoContainer>
            <CloseButton onClick={() => removeTodo(todoId)}>X</CloseButton>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <InputContainer>
                <Input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <AddButton onClick={() => addTask(todoId, newTask)}>Add Task</AddButton>
            </InputContainer>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <Checkbox
                            type="checkbox"
                            defaultChecked={task.completed}
                            onChange={(e) => handleCheckboxChange(task.id, e.target.checked)} />
                        {task.task}
                        <RemoveButton onClick={() => removeTask(task.id)}>Remove</RemoveButton>
                    </ListItem>
                ))}
            </List>
            {alertVisible && <Alert message={alertMessage} isOpen={alertIsOpen} onClose={handleAlertClose} />}
        </TodoContainer>
    );
};

export default TodoTemplate;

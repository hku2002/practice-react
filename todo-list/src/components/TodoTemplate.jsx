import React, {useState} from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const TodoTemplate = (props) => {
    const { title, date } = props;
    const [tasks, setTasks] = useState(props.tasks);
    const [newTask, setNewTask] = useState('');
    const apiUrl = 'http://localhost:8080';

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = async (id) => {
        const removeUrl = apiUrl + "/todo/task/" + id;
        try {
            const response = await fetch(removeUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {

            } else {
                console.error('Server error:', response);
            }
        } catch (e) {

        }

        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);

    };

    return (
        <TodoContainer>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <InputContainer>
                <Input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <AddButton onClick={addTask}>Add Task</AddButton>
            </InputContainer>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={task.id}>
                        {task.task}
                        <RemoveButton onClick={() => removeTask(task.id)}>Remove</RemoveButton>
                    </ListItem>
                ))}
            </List>
        </TodoContainer>
    );
};

export default TodoTemplate;

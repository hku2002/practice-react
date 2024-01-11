import React, { useState } from 'react';
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

const SaveButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
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
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const { title } = props;

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const saveTasks = () => {
        // 여기에서 tasks를 저장하는 로직을 추가할 수 있습니다.
        console.log('Tasks saved:', tasks);
    };

    const getTodayDate = () => {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('en-US', options);
    };

    return (
        <TodoContainer>
            <h1>{title}</h1>
            <h2>{getTodayDate()}</h2>
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
                    <ListItem key={index}>
                        {task}
                        <RemoveButton onClick={() => removeTask(index)}>Remove</RemoveButton>
                    </ListItem>
                ))}
            </List>
            <SaveButton onClick={saveTasks}>Save</SaveButton>
        </TodoContainer>
    );
};

export default TodoTemplate;

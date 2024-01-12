import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const AddTodoTemplate = ({ props }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title && !date) {
            alert('Please fill in all fields');
        } else {
            try {
                const response = await fetch('http://localhost:8080/todo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, date, tasks: [] }),
                });

                if (response.ok) {
                    alert("등록 성공");
                    setTitle('');
                    setDate('');
                } else {
                    console.error('Server error:', response);
                }
            } catch (error) {
                // 네트워크 오류 처리
                console.error('Network error:', error);
            }
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <Button type="submit">Add Todo</Button>
            </Form>
        </Container>
    );
};

export default AddTodoTemplate;

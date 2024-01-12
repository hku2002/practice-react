import React, { useState } from 'react';
import styled from 'styled-components';
import CustomAlert from "../common/components/CustomAlert";

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
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleAlertClose = () => {
        setAlertVisible(false);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title && !date) {
            setAlertMessage('Title 혹은 날짜가 없습니다.');
            setAlertVisible(true);
            setAlertIsOpen(true);
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
                    setTitle('');
                    setDate('');
                    setAlertMessage('성공적으로 추가되었습니다');
                    setAlertVisible(true);
                    props();
                } else {
                    console.error('Server error:', response);
                }
            } catch (error) {
                // 네트워크 오류 처리
                setAlertMessage('네트워크 오류');
                setAlertVisible(true);
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
            {alertVisible && <CustomAlert message={alertMessage} isOpen={alertIsOpen} onClose={handleAlertClose} />}
        </Container>
    );
};

export default AddTodoTemplate;

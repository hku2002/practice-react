import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AlertButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CustomAlert = ({ message, onClose }) => {
    return (
        <AlertContainer>
            <p>{message}</p>
            <AlertButton onClick={onClose}>닫기</AlertButton>
        </AlertContainer>
    );
};
export default CustomAlert;

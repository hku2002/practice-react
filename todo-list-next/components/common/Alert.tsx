import React from 'react';
import styled from 'styled-components';

const BackgroundLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* 반투명한 검은 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const AlertContainer = styled.div`
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

const Alert = ({ message, onClose, isOpen }) => {
    if (!isOpen) {
        return null; // 모달이 닫혀있을 때는 아무것도 렌더링하지 않음
    }

    return (
        <BackgroundLayer onClick={onClose}>
        <AlertContainer onClick={(e) => e.stopPropagation()}>
            <p>{message}</p>
            <AlertButton onClick={onClose}>닫기</AlertButton>
        </AlertContainer>
        </BackgroundLayer>
);
};

export default Alert;

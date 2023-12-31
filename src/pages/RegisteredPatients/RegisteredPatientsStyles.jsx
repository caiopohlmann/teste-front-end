// RegisteredPatientsStyles.jsx

import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  background-color: ${({ active }) => (active ? '#007bff' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#ccc')};
  }

  &:focus {
    outline: none;
  }
`;

export const BackButton = styled.button`
  padding: 10px 15px;
  background-color: #ccc;
  color: #000;
  border: none;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #999;
  }

  &:focus {
    outline: none;
  }
`;
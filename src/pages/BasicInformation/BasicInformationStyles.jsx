import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  & > div {
    margin-right: 15px;
  }
`;

export const ProfilePicture = styled.div`
  width: 125px;
  height: 125px;
  border-radius: ${({ hasSelectedImage }) => (hasSelectedImage ? '50%' : '10%')};
  overflow: hidden;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: ${({ hasSelectedImage }) => (hasSelectedImage ? '100%' : '70%')};
    height: ${({ hasSelectedImage }) => (hasSelectedImage ? '100%' : '70%')};
    object-fit: cover;
    border-radius: ${({ hasSelectedImage }) => (hasSelectedImage ? '50%' : '8%')};
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export const RemoveButtonContainer = styled.div`
  text-align: center;
  margin-top: 10px; /* Adicione a margem para distância do botão em relação à imagem */
`;
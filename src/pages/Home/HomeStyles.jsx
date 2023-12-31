// HomeStyles.jsx
import styled from 'styled-components';
import searchIcon from '../../assets/img/searchIcon.png';
import { StyledButton } from '../../components/StyledButton';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

export const HeaderContainer = styled.header`
  background: #f0f0f0;
  color: #000;
  padding: 10px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-right: auto;
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 10px 10px 10px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 20px;
  width: 200px;
  background: #fff;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px;
  outline: none;
`;

export const AddPatientButton = styled(StyledButton)`
  margin-left: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.thead`
  /* Definições de estilo para o cabeçalho da tabela */
  background: #eee;
`;

export const TableBody = styled.tbody`
  /* Mantém o layout padrão de linha */
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  white-space: nowrap; /* Impede que o conteúdo quebre em linhas */
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCellContent = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export const ActionsButton = styled.button`
  margin-left: 10px;
`;

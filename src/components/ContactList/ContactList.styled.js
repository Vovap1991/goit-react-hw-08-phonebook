import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 0;
  gap: 10px;
`;

export const ListItem = styled.li`
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DeleteContactButton = styled.button`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 60px;
  height: 30px;
  margin: 0 0 0 10px;
  border: 1px solid #5ac5e8;
  font-size: 15px;
  border-radius: 10px;
  background-color: white;
  transition: background-color 300ms linear, color 300ms linear;

  &:is(:focus, :hover) {
    color: white;
    background-color: #358ff0;
  }
`;

export const NoContactsMessage = styled.div`
  font-size: 25px;
`;

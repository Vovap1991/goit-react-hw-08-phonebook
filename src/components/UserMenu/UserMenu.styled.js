import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const UserMenuTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #e05a58;
  height: auto;
  padding: 5px;
  margin: 0 auto;
`;

export const UserMenuLogOutButton = styled.button`
  width: 100px;
  padding: 8px 5px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

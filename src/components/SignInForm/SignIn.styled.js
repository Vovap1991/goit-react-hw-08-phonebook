import styled from 'styled-components';

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;
  font-size: 25px;
  font-weight: 500;
  border: 1px solid;
  border-radius: 10px;
  padding: 30px 15px;
  background-color: #b0e0e6;
`;

export const RigistrationFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const RigistrationFormInput = styled.input`
  margin-top: 8px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;

export const RigistrationFormButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 15px;
  padding: 10px 20px;
  width: 150px;

  font-size: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

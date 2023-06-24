import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 5px 5px;
  font: inherit;
  cursor: pointer;
  border: 1px solid #191d1e;
  font-weight: 600;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 3px 3px;
  outline: none;
  margin-bottom: 10px;
  `;

export const Button = styled.button`
  padding: 5px 5px;
  font: inherit;
  cursor: pointer;
  border: 1px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 16px;
  border-radius: 3px 3px;
  margin-bottom: 10px;
  &:hover {
    color: #750000;
    border: 1px solid #750000;
  }
  `;
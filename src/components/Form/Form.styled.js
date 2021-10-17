import styled from 'styled-components';

export const Formulario = styled.form`
  margin: 10px auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p {
    height: 20px;
  }
`;

export const Input = styled.input`
  padding: 10px;
`;

export const Submit = styled.button`
  margin-top: 5px;
  padding: 10px;
`;

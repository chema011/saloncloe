import styled from 'styled-components';

export const Box = styled.div`
  padding-top: 100px;
  text-align: center;
  color: ${(props) => props.theme.darkBlue};

  & .titulo {
    font-size: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    text-transform: uppercase;
    font-weight: 700;
  }

  & .sometext {
    margin-top: 15px;
    font-size: 20px;
  }
`;

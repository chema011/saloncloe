import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Box = styled.div`
  padding-top: 100px;
`;

export const BoxContent = styled.div`
  text-align: center;
  color: ${(props) => props.theme.darkBlue};

  & .titulo {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 50px;

    @media ${device.laptop} {
      font-size: 80px;
    }
  }

  & .sometext {
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 30px;
  }
`;

export const BoxImg = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 300px;
  background-color: black;
`;

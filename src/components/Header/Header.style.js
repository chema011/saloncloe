import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Box = styled.div`
  padding-top: 100px;
`;

export const BoxContent = styled.div`
  text-align: center;
  color: ${(props) => props.theme.primary};

  & .titulo {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 30px;
    text-shadow: 2px 2px 10px pink;

    @media ${device.laptop} {
      font-size: 80px;
    }

    & span {
      margin-left: 0;
    }
  }
`;

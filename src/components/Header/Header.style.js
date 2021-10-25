import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Box = styled.div`
  padding-top: 100px;
`;

export const BoxContent = styled.div`
  text-align: center;
  color: ${(props) => props.theme.primary};
  overflow: hidden;

  .Logo {
    height: 200px;
  }

  .bounce {
    display: none;

    &:last-child {
      display: block !important;
    }
  }

  .titulo {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 30px;
    text-shadow: 2px 2px 10px pink;

    & span {
      margin-left: 0;
    }
  }

  @media ${device.mobileL} {
    .titulo {
      font-size: 35px;
    }
  }

  @media ${device.tablet} {
    .titulo {
      font-size: 50px;
    }

    .bounce {
      display: block;
      &:last-child {
        display: none !important;
      }
    }
  }

  @media ${device.laptop} {
    .titulo {
      font-size: 80px;
    }
  }
`;

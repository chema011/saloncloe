import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Box = styled.div`
  padding-top: 100px;
`;

export const BoxContent = styled.div`
  text-align: center;
  color: ${(props) => props.theme.primary};
  overflow: hidden;
  padding: 0 30px;

  .Logo {
    height: 200px;
  }

  .bounce {
    display: none;
  }

  .titulo {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    text-shadow: 2px 2px 10px pink;

    & span {
      margin-left: 0;
    }
  }

  .secundario {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    text-shadow: 2px 2px 10px pink;
    margin-top: 10px;
    line-height: 30px;
    font-size: 12px;

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

    .secundario {
      font-size: 14px;
    }

    .bounce {
      display: block;
    }

    .bouncePhone {
      display: none;
    }
  }

  @media ${device.laptop} {
    .titulo {
      font-size: 80px;
    }

    .secundario {
      font-size: 16px;
    }
  }

  @media ${device.laptopL} {
    .secundario {
      font-size: 20px;
    }
  }
`;

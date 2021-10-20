import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

const Button = styled.a`
  background: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  transition: all 1s;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;

  @media ${device.laptop} {
  position: relative;

    &:hover {
      transform: scale(1.1);
    }

    &:hover::after {
      transform: scale(1.4);
      background: ${(props) => props.theme.darkBlue};
      opacity: 0;
    }

    &::after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.darkBlue};
      position: absolute;
      top: 0;
      border-radius: 5px;
      left: 0;
      transition: all 1s ease;
      z-index: -1;
    }
  }
`;

export default Button;

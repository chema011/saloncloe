import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  h2 {
    display: inline-block;
    margin-bottom: 30px;
    color: ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.primary};
    transition: all 1s ease-in;
  }

  &:hover h2 {
    padding: 0 50px;
  }

  img {
    object-fit: cover;
    margin-bottom: 30px;
    height: 300px;
  }

  

  p {
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    font-size: 12px;
  }

  @media ${device.mobileL} {
    
    img {
    height: 600px;
    }

    p {
      font-size: 16px;
    }
  }
`;

import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Box = styled.div`
  margin-top: 140px;
  width: 100%;
  height: 300px;
  text-align: center;

  &:hover& h2 {
    padding: 0 50px;
  }

  & h2 {
    display: inline-block;
    margin-bottom: 30px;
    color: ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.primary};
    transition: all 1s ease-in;
  }

  & iframe {
    border: none;
    outline: 3px solid ${(props) => props.theme.secondary};
    padding: 20px;
    border-radius: 10px ;
  }

  @media ${device.tablet} {
    height: 500px;
  }
`;

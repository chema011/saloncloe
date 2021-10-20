import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Nav = styled.div`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  width: 100%;
`;

export const Flex = styled.div`
  height: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  box-shadow: -1px -1px 79px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px -1px 79px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px -1px 79px 0px rgba(0, 0, 0, 0.75);
`;

export const Box = styled.ul`
  display: none;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
  }
`;

export const BoxMedia = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: ${(props) => props.theme.primary};
  bottom: 0;

  & .button {
    font-size: 5px !important;
  }

  & li:first-child {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  color: ${(props) => props.theme.secondary};
  font-size: 11px;
  gap: 5px;

  @media ${device.tablet} {
    font-size: 14px;
    align-items: center;
    flex-direction: row;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

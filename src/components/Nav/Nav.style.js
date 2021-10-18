import styled from 'styled-components';

export const Nav = styled.div`
  background-color: ${(props) => props.theme.darkBlue};
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
  display: flex;
  margin-left: 50px;
  list-style: none;
  justify-content: space-around;
  width: 100%;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  color: ${(props) => props.theme.white};

  & svg {
    margin-right: 10px;
  }
`;

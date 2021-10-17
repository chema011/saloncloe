import styled from 'styled-components';

export const Nav = styled.div`
  background-color: ${(props) => props.theme.darkBlue};
  height: 80px;
`;

export const Flex = styled.div`
  border: 1px solid red;
  height: 100%;
  display: flex;
  align-items: center;
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

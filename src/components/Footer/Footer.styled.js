import Styled from 'styled-components';

export const Footer = Styled.div`
background: ${(props) => props.theme.primary};
margin-top: 100px;
`;

export const Box = Styled.div`
max-width: 1200px;
margin: 0 auto;
display:flex;
align-items: center;
justify-content:center;
padding: 30px 0;
p {
  color: ${(props) => props.theme.secondary};
  width: 60%;
}

svg {
  color: ${(props) => props.theme.secondary};
}
`;

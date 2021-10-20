import Styled from 'styled-components';


export const Box = Styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 10px;
`;

export const Link = Styled.a`
font-size: 30px;
color: ${(props) => props.theme.primary};

&:hover {
transform: scale(1.1);
}
`;

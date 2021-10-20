import Styled from 'styled-components';

export const Box = Styled.div`
 height: 100px; 
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 10px;
`;

export const Link = Styled.a`
font-size: 50px;
color: ${(props) => props.theme.darkBlue};

&:hover {
transform: scale(1.1);
}
`;

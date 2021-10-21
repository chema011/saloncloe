import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Container = styled.div`
  margin: 50px auto;
  max-width: 1200px;
  overflow: hidden;
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

  .slick-slider {
    z-index: 1;
  }

  .slick-prev::before {
    color: ${(props) => props.theme.primary};
  }

  .slick-next::before {
    color: ${(props) => props.theme.primary};
  }

  @media ${device.laptop} {
    overflow: initial;
  }
`;

export const Img = styled.img`
  width: 100% !important;
  height: 100vh;

  @media ${device.mobileL} {
    height: 100vh;
    width: 200px !important;
  }

  @media ${device.tablet} {
    margin: 0 50px;
    height: 100vh;
  }

  @media ${device.tablet} {
    margin: 0 50px;
    height: 700px;
    width: 300px !important;
  }
`;

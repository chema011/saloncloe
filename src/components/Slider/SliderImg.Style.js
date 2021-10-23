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

export const Box = styled.div`
  padding: 0 50px;

  .slick-center {
    @media ${device.tablet} {
      transform: scale(1.1);
      transition: all 1s ease-in-out;
    }
  }
`;

export const Img = styled.img`
  width: 100% !important;
  height: 300px;
  transform: scale(0.9);
  transition: all 1s ease-in-out;
  object-fit: cover;

  @media ${device.mobileL} {
    height: 400px;
  }

  @media ${device.tablet} {
    height: 500px;
    /* width: 300px !important; */
  }

  @media ${device.laptop} {
    height: 500px;
    width: 300px !important;
  }

  img {
    margin: 0 !important;
  }

  .center {
    transform: scale(1.1);
  }
`;

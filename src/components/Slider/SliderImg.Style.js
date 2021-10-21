import styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Container = styled.div`
  margin-top: 100px;
  max-width: 1200px;
  overflow: hidden;

  @media ${device.laptop} {
    overflow: initial;
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
`;

export const Img = styled.img`
  width: 100% !important;
  height: 400px;

  @media ${device.mobileL} {
    height: 500px;
    width: 300px !important;
    margin: 0 70px;
  }

  @media ${device.tablet} {
    margin: 0 50px;
  }
`;

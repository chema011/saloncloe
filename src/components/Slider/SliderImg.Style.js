import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;

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
  height: 500px;
  width: 300px !important;
`;

import React from 'react';

///Estilos
import * as Styled from './RedesSociales.style';

//Datos
import { RedesSocialesDatos } from './RedesSocialesData';

const RedesSociales = () => {
  return (
    <Styled.Box>
      {RedesSocialesDatos.map((item, idx) => (
        <Styled.Link href={item.link && item.link} target="_blank" key={idx}>
          {item.icon}
        </Styled.Link>
      ))}
    </Styled.Box>
  );
};

export default RedesSociales;

import React from 'react';

///Estilos
import * as Styled from './RedesSociales.style';

//Datos
import { RedesSocialesDatos } from './RedesSocialesData';

const RedesSociales = () => {
  return (
    <Styled.Box>
      {RedesSocialesDatos.map((item, idx) => (
        <>{item.icon}</>
      ))}
    </Styled.Box>
  );
};

export default RedesSociales;

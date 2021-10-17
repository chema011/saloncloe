import React from 'react';

// Hooks
import { useForm } from 'react-hook-form';

// Estilos
import * as Styled from './Form.styled';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const data = (data) => {
    console.log(data);
  };
  return (
    <Styled.Formulario onSubmit={handleSubmit(data)}>
      <Styled.Input
        type="text"
        placeholder="Nombre"
        {...register('nombre', { required: true, minLength: 3 })}
      />
      <p>
        {errors.nombre && errors.nombre.type === 'required' && 'Requerido'}
        {errors.nombre &&
          errors.nombre.type === 'minLength' &&
          'El minimos es de 3 caracteres'}
      </p>
      <Styled.Input
        type="tel"
        placeholder="Numero de telefono"
        {...register('telefono')}
      />
      <p></p>
      <Styled.Input
        type="email"
        placeholder="Correo electronico*"
        {...register('email', { required: true })}
      />
      <p>{errors.email && errors.email.type === 'required' && 'Requerido'}</p>

      <Styled.Submit type="submit">Enviar</Styled.Submit>
    </Styled.Formulario>
  );
};

export default Form;

import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layouts/Layout';
import { Formulario, Campo, InputSubmit } from '../components/ui/Formulario';

// Validacion
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

export default function CrearCuenta() {

  const {
    valores,
    errorres,
    submitForm,
    handleChange,
    handleSubmit
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const {nombre, email, password} = valores;

  function crearCuenta() {
    console.log('Creando cuenta...');
  }

  return (
    <Fragment>
      <Layout>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >Crear Cuenta</h1>
        <Formulario
          onSubmit={handleSubmit}
          noValidate
        >
          <Campo>
            <labe htmlFor="nombre">Nombre</labe>
            <input 
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
              value= {nombre}
              onChange={handleChange}
            />
          </Campo>
          <Campo>
            <labe htmlFor="email">Email</labe>
            <input 
              type="email"
              id="email"
              placeholder="Tu Email"
              name="email"
              value= {email}
              onChange={handleChange}
            />
          </Campo>
          <Campo>
            <labe htmlFor="password">Password</labe>
            <input 
              type="password"
              id="password"
              placeholder="Tu Password"
              name="password"
              value= {password}
              onChange={handleChange}
            />
          </Campo>
          <InputSubmit 
            type="submit"
            value="Crear Cuenta"
          />
        </Formulario>
      </Layout>
    </Fragment>
  )
}

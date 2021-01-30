import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layouts/Layout';
import { Formulario, Campo, InputSubmit } from '../components/ui/Formulario';

export default function CrearCuenta() {
  return (
    <Fragment>
      <Layout>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >Crear Cuenta</h1>
        <Formulario>
          <Campo>
            <labe htmlFor="nombre">Nombre</labe>
            <input 
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
            />
          </Campo>
          <Campo>
            <labe htmlFor="email">Email</labe>
            <input 
              type="email"
              id="email"
              placeholder="Tu Email"
              name="email"
            />
          </Campo>
          <Campo>
            <labe htmlFor="password">Password</labe>
            <input 
              type="password"
              id="password"
              placeholder="Tu Password"
              name="password"
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

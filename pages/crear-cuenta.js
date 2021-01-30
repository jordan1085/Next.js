import React, { Fragment } from 'react';
import Layout from '../components/layouts/Layout';

export default function CrearCuenta() {
  return (
    <Fragment>
      <Layout>
        <h1>Crear Cuenta</h1>
        <form>
          <div>
            <labe htmlFor="nombre">Nombre</labe>
            <input 
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
            />
          </div>
          <div>
            <labe htmlFor="email">Email</labe>
            <input 
              type="email"
              id="email"
              placeholder="Tu Email"
              name="email"
            />
          </div>
          <div>
            <labe htmlFor="password">Password</labe>
            <input 
              type="password"
              id="password"
              placeholder="Tu Password"
              name="password"
            />
          </div>
          <input 
            type="submit"
            value="Crear Cuenta"
          />
        </form>
      </Layout>
    </Fragment>
  )
}

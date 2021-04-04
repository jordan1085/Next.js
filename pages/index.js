import { Fragment } from 'react';
import Layout from '../components/layouts/Layout';
import DetallesProducto from '../components/layouts/DetallesProducto';
import useProductos from '../hooks/useProductos';

export default function Home() {

  const { productos } = useProductos('creado');

  return (
    <Fragment>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map(producto => (
                <DetallesProducto 
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </ul>
          </div> 
        </div>
      </Layout>
    </Fragment>
  )
}

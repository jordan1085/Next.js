import { Fragment, useEffect, useState, useContext } from 'react';
import Layout from '../components/layouts/Layout';
import { FirebaseContext } from '../firebase';
import DetallesProducto from '../components/layouts/DetallesProducto';

export default function Home() {

  const [productos, guardarProductos] = useState([]);

  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db.collection('productos').orderBy('creado', 'desc').onSnapshot(manejarSnapshop)
    }
    obtenerProductos();
  }, [])

  function manejarSnapshop(snapshot) {
    const productos = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    console.log(productos);
    guardarProductos(productos)
  }

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

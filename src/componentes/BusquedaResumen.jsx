import React, { Fragment, useState, useEffect, useContext } from "react";
import "./BusquedaResumen.css";


const BusquedaResumen = ({ busqueda}) => {
  const [cantidad, setCantidad] = useState(0);

  //obtenemos los libros buscados
  const librosBuscados  = busqueda ? busqueda : [];

  useEffect(() => {
    if (librosBuscados) {
      setCantidad(librosBuscados.length);
    }
    console.log(`La búsqueda contiene ${librosBuscados.length} libro(s).`);
  }, [librosBuscados]);

  return (
    <Fragment>
      <div className='busquedaResumen'>
        La búsqueda contiene
        {cantidad ? ` ${cantidad} libro(s).` : " cero libros."}
      </div>
    </Fragment>
  );
};

export default BusquedaResumen;

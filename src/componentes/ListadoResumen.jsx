import React, { Fragment, useState, useEffect, useContext } from "react";
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";

const ListadoResumen = () => {
  const [cantidad, setCantidad] = useState(0);

  const { biblioteca } = useContext(contextoBiblioteca);

  const contarLibros = () => {
    setCantidad(biblioteca.length);
  };

  useEffect(() => {
    contarLibros();
    console.log(`La biblioteca contiene ${cantidad} libro(s).`);
  }, [biblioteca]);

  return (
    <Fragment>
      <div className='listadoResumen'>
        La biblioteca contiene
        {cantidad ? ` ${cantidad} libro(s).` : " cero libros."}
      </div>
    </Fragment>
  );
};

export default ListadoResumen;

import React, { Fragment, useContext } from "react";
import "./ListadoResumen.css";
import { contextoBiblioteca } from "../contextos/ProveedorLibros";

const ListadoResumen = () => {

  //Obtenemos la cantidad de libros del contexto
  const { cantidad } = useContext(contextoBiblioteca);

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

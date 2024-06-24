import React, { Fragment } from "react";

const BuscarResumen = ({ cantidad }) => {
  return (
    <Fragment>
      <div className='buscar__resumen'>
        Se {cantidad === 1 ? "ha" : "han"} encontrado {cantidad}
        {cantidad === 1 ? " libro" : " libros"} en la búsqueda.
      </div>
    </Fragment>
  );
};

export default BuscarResumen;

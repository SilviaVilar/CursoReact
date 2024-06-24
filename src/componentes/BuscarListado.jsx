import React, { Fragment } from "react";
import Libro from "./Libro.jsx";
import MostrarErrores from "./MostrarErrores.jsx";

const BuscarListado = ({ busqueda }) => {
  return (
    <Fragment>
      {busqueda ? (
        busqueda.map((datos_libro) => {
          return <Libro key={datos_libro.id} datos={datos_libro} />;
        })
      ) : (
        <MostrarErrores erroresAMostrar={["No se han encontrado libros."]} />
      )}
    </Fragment>
  );
};

export default BuscarListado;

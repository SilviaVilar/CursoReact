import React, { Fragment, useContext } from "react";
import LibroDetalles from "../LibroDetalles.jsx";
import "./Mostrar.css";
import { contextoBiblioteca } from "../../contextos/ProveedorLibros.jsx";
import { useParams } from "react-router-dom";

const Mostrar = () => {
  // Se importa la función desde el contexto.
  const { buscarLibro } = useContext(contextoBiblioteca);
  // Se recoge la variable del enlace con useParams.
  const { identificador } = useParams();
  // Se utiliza la función importada (devuelve un arraycon un/ninguno objeto de tipo libro).
  const libroFiltrado = buscarLibro(identificador);

  return (
    <Fragment>
      <section className='mostrar'>
        {/* No es necesario comprobar si es un array, filter siempre devuelve uno. */}
        {libroFiltrado.length ? (
          /* Se pasa la primera (y única) ocurrencia del array. */
          <LibroDetalles libroBuscado={libroFiltrado[0]} />
        ) : (
          "No se ha encontrado ningún libro."
        )}
      </section>
    </Fragment>
  );
};

export default Mostrar;

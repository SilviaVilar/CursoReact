import React, { Fragment, useContext } from "react";
import LibroDetalles from "../LibroDetalles.jsx";
import "./Mostrar.css";
import { contextoBiblioteca } from "../../contextos/ProveedorLibros.jsx";
import { useParams } from "react-router-dom";

const Mostrar = () => {

  const { buscarLibro, libroBorrado } = useContext(contextoBiblioteca);

  const { identificador } = useParams();

  const libroFiltrado = buscarLibro(identificador);

  const titulo = libroBorrado.titulo ? libroBorrado.titulo : "Sin título";

  const muestraMensaje = () => {
    if (libroBorrado) {
      return `El libro ${titulo} ha sido eliminado.`;
    } else {
      return "No se ha encontrado ningún libro.";
    }
  }

  return (
    <Fragment>
      <section className='mostrar'>
        {libroFiltrado.length
          ? (
            <LibroDetalles libroBuscado={libroFiltrado[0]} />
          ) : (
            muestraMensaje()
          )}
      </section>
    </Fragment>
  );
};

export default Mostrar;

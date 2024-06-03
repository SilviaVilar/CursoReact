import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Libro from "./Libro.jsx";
import "./ListadoLibros.css";
import ListadoResumen from "./ListadoResumen.jsx";
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";

const ListadoLibros = () => {
  // Importación de desde el contexto.
  const {
    biblioteca,
    inicializarBiblioteca,
    borrarBiblioteca,
    inventarLibro,
    insertarLibro,
  } = useContext(contextoBiblioteca);

  return (
    <Fragment>
      <div>
        <button
          className='boton boton--aceptar'
          onClick={(evento) => {
            inicializarBiblioteca();
          }}
        >
          Cargar libros
        </button>
        <button
          className='boton boton--cancelar'
          onClick={(evento) => {
            borrarBiblioteca();
          }}
        >
          Borrar biblioteca
        </button>
        <button
          className='boton boton--volver'
          onClick={(evento) => {
            insertarLibro(inventarLibro());
          }}
        >
          Insertar Libro
        </button>
      </div>
      <ListadoResumen />
      <section className='listado'>
        {Array.isArray(biblioteca) && biblioteca.length
          ? biblioteca.map((datos_libro) => {
              return (
                <Link
                  key={datos_libro.id}
                  to={`/mostrar/${datos_libro.id}`}
                  className='listado__libro'
                >
                  <Libro datos={datos_libro} />
                </Link>
              );
            })
          : "No se han encontrado libros."}
      </section>
    </Fragment>
  );
};

export default ListadoLibros;

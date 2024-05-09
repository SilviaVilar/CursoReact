import React, { Fragment } from "react";
import Libro from "./Libro.jsx";
import "./ListadoLibros.css";
import coleccion from "../assets/bbdd/biblioteca.json";

const ListadoLibros = () => {
  return (
    <Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <section className='seccion' >
        {Array.isArray(coleccion.libros) && coleccion.libros.length
          ? coleccion.libros.map((datos_libro) => {
              return <Libro key={datos_libro.id} datos={datos_libro} />;
            })
          : "No se han encontrado libros."}
      </section>
    </Fragment>
  );
};

export default ListadoLibros;

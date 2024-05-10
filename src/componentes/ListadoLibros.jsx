import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Libro from "./Libro.jsx";
import coleccion from "../assets/bbdd/biblioteca.json";
import "./ListadoLibros.css";

const ListadoLibros = () => {
  return (
    <Fragment>
      <section className='listado'>
        {Array.isArray(coleccion.libros) && coleccion.libros.length
          ? coleccion.libros.map((datos_libro) => {
              return (
                <Link
                  key={datos_libro.id}
                  to='/mostrar'
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

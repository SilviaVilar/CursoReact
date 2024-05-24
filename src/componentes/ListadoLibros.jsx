import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Libro from "./Libro.jsx";
import coleccion from "../assets/bbdd/biblioteca.json";
import "./ListadoLibros.css";
import ListadoResumen from "./ListadoResumen.jsx";


const ListadoLibros = () => {
  const [biblioteca, setBiblioteca] = useState([]);

  const inicializarBiblioteca = () => {
    setBiblioteca(coleccion.libros);
  };

  const borrarBiblioteca = () => {
    setBiblioteca([]);
  }

  const inventarLibro = () => {
    return {
      id: crypto.randomUUID(),
      titulo: "Yo, robot",
      autor: "Isaac Asimov",
      portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
      completado: false,
      sinopsis: "Esta obra visionaria tuvo una gran influencia en la ciencia ficción posterior, pero también en la propia ciencia de la robótica. Asimov formuló por primera vez las tres leyes fundamentales de la robótica, con claras implicaciones éticas y psicológicas. ¿Qué diferencia hay entre un robot inteligente y un ser humano? ¿Puede el creador de un robot predecir su comportamiento? ¿Debe la lógica determinar lo que es mejor para la humanidad? Yo, robot conecta entre sí una serie de historias de todo tipo de máquinas inteligentes a través de la robopsicóloga Susan Calvin. Estos robots son cada vez más perfectos y llegan a desafiar en ocasiones a sus creadores.",
      };
  }

  const insertarLibro = (libroAInsertar) => {

    setBiblioteca([...biblioteca, libroAInsertar]);
    //no funciona así el añadir el elemento al array
    console.log(biblioteca);
  }

  useEffect(() => {
    inicializarBiblioteca();
  }, []);

  
  return (
    <Fragment>
      <div>{/*Aquí van los botones*/}
        <button className='boton boton--aceptar'
          onClick={(event) => { inicializarBiblioteca(); }}>
          Cargar libros
        </button>
        <button className='boton boton--aceptar'
          onClick={(event) => { borrarBiblioteca(); }}>
          Borrar biblioteca
        </button>
        <button className='boton boton--aceptar'
          onClick={(event) => { insertarLibro(inventarLibro()); }}>
          Insertar libro
        </button>
      </div>
      {/* Aquí va el listado de libros */}
      <ListadoResumen biblioteca={biblioteca} />
      <section className='listado'>
        {Array.isArray(biblioteca) && biblioteca.length
          ? biblioteca.map((datos_libro) => {
            return (
              <Link
                key={datos_libro.id}
                to='/mostrar'
                className='listado__libro'
              >
                <Libro key={datos_libro.id} datos={datos_libro} />
              </Link>
            );
          })
          : "No se han encontrado libros."}
      </section>
    </Fragment>
  );
};

export default ListadoLibros;

import React, { Fragment } from "react";
import sin_portada from "../assets/img/sin_portada.png";
import "./Libro.css";

const Libro = (props) => {
  // Se utiliza la desestructuración de objetos.
  const { portada, titulo, autor, id, incluirLibroAPI } = props.datos;

  return (
    <Fragment>
      <article id={id ? id : crypto.randomUUID()} className='libro__contenido'
        //al pinchar sobre el libro lo incluye el libro buscado en la coleccion 
        onClick={(evento) => {
          evento.target.parentNode.classList.contains("libro__contenido") &&
            confirm("Desea incluir este libro en su biblioteca?") &&
            incluirLibroAPI(evento.target.parentNode.id);
        }}
      >
        <img
          className='libro__portada'
          src={portada ? portada : sin_portada}
          width='150'
        ></img>
        <div className='libro__titulo'>
          {titulo ? titulo : "No se ha especificado título."}
        </div>
        <div className='libro__autor'>
          {autor ? autor : "No se ha especificado autor."}
        </div>
      </article>
    </Fragment>
  );
};

export default Libro;

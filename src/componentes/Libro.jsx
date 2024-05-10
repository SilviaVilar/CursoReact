import React, { Fragment } from "react";
import sin_portada from "../assets/img/sin_portada.png";
import "./Libro.css";

const Libro = (props) => {
  // Se utiliza la desestructuración de objetos.
  const { portada, titulo, autor, id } = props.datos;

  return (
    <Fragment>
      <article id={id ? id : crypto.randomUUID()} className='libro__contenido'>
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

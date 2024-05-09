import React, { Fragment } from "react";
import "./Libro.css";
import sin_portada from "../assets/img/sin_portada.png";

const Libro = (props) => {
  const { portada, titulo, autor, id } = props.datos;

  return (
    <Fragment>
      <a className="libro__link" href="#">
        <article id={id ? id : crypto.randomUUID()} className="libro__contenido">
          <img 
            width='150px'
            src={portada ? portada : sin_portada}
          ></img>
          <div className="libro__titulo">{titulo ? titulo : "No se ha especificado título."}</div>
          <div className="libro__autor">{autor ? autor : "No se ha especificado autor."}</div>
        </article>
      </a>
    </Fragment>
  );
};

export default Libro;

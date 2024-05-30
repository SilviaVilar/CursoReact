import React, { Fragment, useContext } from "react";
import "./LibroDetalles.css";
import sin_portada from "../assets/img/sin_portada.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";
import { useNavigate } from "react-router-dom";

const LibroDetalles = (props) => {
  const { borrarLibro, libroBorrado, setlibroBorrado } = useContext(contextoBiblioteca);

  const { id, titulo, autor, portada, completado, sinopsis } = props.libroBuscado;

  const navegar = useNavigate();

  return (
    <Fragment>
      <article className='libro-detalle'>
        <img
          className='libro-detalle__portada'
          src={portada ? portada : sin_portada}
          alt={titulo ? titulo : "No se ha especificado título."}
        ></img>
        <div className='libro-detalle__info'>
          <div>
            {completado ? (
              <FontAwesomeIcon
                title='Leído'
                className='libro-detalle__completado libro-detalle__completado--true'
                icon={faCircleCheck}
                size='2x'
              />
            ) : (
              <FontAwesomeIcon
                title='No leído'
                className='libro-detalle__completado libro-detalle__completado--false'
                icon={faCircleXmark}
                size='2x'
              />
            )}
            <span className='libro-detalle__titulo'>
              {titulo ? titulo : "No se ha especificado título."}
            </span>
          </div>
          <div className='libro-detalle__autor'>
            {autor ? autor : "No se ha especificado autor."}
          </div>
          <div className='libro-detalle__sinopsis'>
            {sinopsis ? sinopsis : "No se ha especificado sinopsis."}
          </div>
          {/* botón para eliminar libro */}
          <input
            type='button'
            value='Eliminar de la biblioteca'
            className='boton boton--cancelar'
            onClick={(evento) => {
              confirm(`¿Desea eliminar ${titulo ? titulo : "Sin título"} de la biblioteca?`)
                && borrarLibro(id);
              {setlibroBorrado(props.libroBuscado);
              setTimeout(() => {
                navegar('/');
              }, 2000);}
            }}
          />

          <Link to='/'>
            <input
              type='button'
              value='&lt; Atrás'
              className='boton boton--volver'
            />
          </Link>
        </div>
      </article>
    </Fragment>
  );
};

export default LibroDetalles;

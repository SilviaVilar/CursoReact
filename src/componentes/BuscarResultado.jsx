import React, { Fragment, useContext } from "react";
import useLibrosAPI from "../hooks/useLibrosAPI.js";
import Cargando from "./Cargando.jsx";
import BuscarListado from "./BuscarListado.jsx";
import MostrarErrores from "./MostrarErrores.jsx";
import BuscarResumen from "./BuscarResumen.jsx";
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";

const BuscarResultado = ({ endpoint }) => {
  // Estados desde el hook para controlar la petición a la API.
  const { busqueda, buscando, error } = useLibrosAPI(endpoint);
  // Importación de la función desde el contexto.
  const { insertarLibro } = useContext(contextoBiblioteca);

  const incluirLibroAPI = (identificador) => {
    const libroBuscado = busqueda.filter((libro) => {
      return libro.id === identificador;
    });
    libroBuscado.length && insertarLibro(libroBuscado[0]);
  };

  return (
    <Fragment>
      {busqueda && <BuscarResumen cantidad={busqueda.length} />}
      <div
        className='buscar__resultado'
        onClick={(evento) => {
          evento.target.parentNode.classList.contains("libro__contenido") &&
            confirm("¿Desea incluir este libro en su biblioteca?") &&
            incluirLibroAPI(evento.target.parentNode.id);
        }}
      >
        {busqueda && <BuscarListado busqueda={busqueda} />}
        {buscando && <Cargando />}
        {error && <MostrarErrores erroresAMostrar={[error]} />}
      </div>
    </Fragment>
  );
};

export default BuscarResultado;

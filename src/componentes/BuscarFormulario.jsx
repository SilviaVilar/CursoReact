import React, { Fragment, useRef, useContext } from "react";
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";

const BuscarFormulario = ({ url, cambiarURL }) => {
  const urlRef = useRef(null);
  const { adecuarURL } = useContext(contextoBiblioteca);

  // Función para limpiar el estado como el value del input.
  const limpiar = () => {
    cambiarURL(undefined);
    urlRef.current.value = "";
  };

  return (
    <Fragment>
      <h2 className='buscar__titulo'>Buscar libros</h2>
      <input
        ref={urlRef}
        name='url'
        type='text'
        placeholder='Escriba por el tema que quiera buscar (autor, título, ISBN...)'
        className='form__input form__input--search'
      ></input>
      <button
        className='boton boton--buscar'
        onClick={(evento) => {
          url ? limpiar() : cambiarURL(adecuarURL(urlRef.current.value));
        }}
      >
        {url ? "Nueva" : "Buscar libros"}
      </button>
    </Fragment>
  );
};

export default BuscarFormulario;

import React, { Fragment, useState, useContext, useRef } from "react";
import "./Crear.css";
import { contextoBiblioteca } from "../../contextos/ProveedorLibros.jsx";
import MostrarErrores from "../MostrarErrores.jsx";

const Crear = () => {
  // Valor inicial para el estado: libro vacío (salvo por el id).
  const libroInicial = {
    // Se genera un UUID aleatorio para cada libro.
    id: crypto.randomUUID(),
    titulo: "",
    autor: "",
    portada: "",
    completado: false,
    sinopsis: "",
  };

  const [libro, setLibro] = useState(libroInicial);
  const [errores, setErrores] = useState([]);

  const actualizarDato = (evento) => {
    const { name, value, checked } = evento.target;
    evento.target.type === "checkbox"
      ? setLibro({ ...libro, [name]: checked })
      : setLibro({ ...libro, [name]: value });
    // console.log(libro); // Comprobación de los valores del estado.
  };

  // Importación desde el contexto.
  const { insertarLibro } = useContext(contextoBiblioteca);

  const limpiarFormulario = () => {
    setLibro(libroInicial);
  };
  // Referencias para el formulario.
  const tituloRef = useRef(null);
  const autorRef = useRef(null);
  const sinopsisRef = useRef(null);

  const validarFormulario = () => {
    // Array para almacenar los errores.
    let arrayErrores = [];

    // Comprobaciones para los inputs del formulario requeridos.
    if (!/^[a-zA-Z0-9][a-zA-Z0-9 ]{2,20}$/.test(tituloRef.current.value)) {
      arrayErrores = [
        ...arrayErrores,
        `El título no tiene un formato válido (entre 2 y 20 caracteres).`,
      ];
    }

    if (!/^[a-zA-Z0-9][a-zA-Z0-9 ]{2,20}$/.test(autorRef.current.value)) {
      arrayErrores = [
        ...arrayErrores,
        `El nombre del autor/a no tiene un formato válido (entre 2 y 20 caracteres).`,
      ];
    }

    if (!/^[a-zA-Z0-9][a-zA-Z0-9 ]{2,20}$/.test(sinopsisRef.current.value)) {
      arrayErrores = [
        ...arrayErrores,
        `La sinópsis no tiene un formato válido (entre 2 y 20 caracteres).`,
      ];
    }

    // Se actualiza el estado de errores.
    setErrores(arrayErrores);

    // Devuelve un valor boolean.
    return arrayErrores.length === 0;
  };

  return (
    <Fragment>
      <section className='crear'>
        <h2 className='crear__titulo'>Crear libro</h2>
        <small>Los campos marcados con un * son obligatorios.</small>
        {/* Existen varias formas de trabajar con formularios en React, pero es recomendable 
        utilizar formularios controlados, es decir, vinculados a un estado que los gobierne. */}
        <form className='form'>
          <div className='form__item'>
            <label htmlFor='titulo' className='form__label'>
              Título*
            </label>
            <input
              ref={tituloRef}
              name='titulo'
              className='form__input'
              type='text'
              placeholder='Escribe el título del libro'
              required
              value={libro.titulo || ""}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            ></input>
          </div>
          <div className='form__item'>
            <label htmlFor='autor' className='form__label'>
              Autor*
            </label>
            <input
              ref={autorRef}
              name='autor'
              className='form__input'
              type='text'
              placeholder='Escribe el/la autor/a del libro'
              required
              value={libro.autor || ""}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            ></input>
          </div>
          <div className='form__item'>
            <label htmlFor='portada' className='form__label'>
              Portada
            </label>
            <input
              name='portada'
              className='form__input'
              type='text'
              placeholder='Escribe la URL de la imagen de portada'
              value={libro.portada || ""}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            ></input>
          </div>
          <div className='form__item'>
            <input
              type='checkbox'
              name='completado'
              className='form__input form__input--checkbox'
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            ></input>
            <label htmlFor='completado' className='form__label'>
              ¿Se ha leído el libro?
            </label>
          </div>
          <div className='form__item'>
            <label htmlFor='sinopsis' className='form__label'>
              Sinopsis
            </label>
            <textarea
              ref={sinopsisRef}
              className='form__input form__input--textarea'
              name='sinopsis'
              placeholder='Escribe la sinopsis del libro'
              value={libro.sinopsis || ""}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            ></textarea>
          </div>
          <div className='form__item form__item--boton'>
            <input
              type='button'
              value='Guardar en la biblioteca'
              className='boton boton--aceptar'
              onClick={(evento) => {
                // Si el formulario contiene errores, no se "envía" la información.
                validarFormulario() &&
                  confirm(`¿Desea guardar este libro en su biblioteca?`) &&
                  insertarLibro(libro);
              }}
            />
            <input
              type='button'
              value='Limpiar formulario'
              className='boton boton--cancelar'
              onClick={(evento) => {
                limpiarFormulario();
              }}
            />
          </div>
        </form>
        <MostrarErrores erroresAMostrar={errores} />
      </section>
    </Fragment>
  );
};

export default Crear;

import React, { Fragment, useState, useContext, useRef, useEffect } from "react";
import "./Crear.css";
import { contextoBiblioteca } from "../../contextos/ProveedorLibros.jsx";
import { Link } from "react-router-dom";
import MostrarErrores from "../MostrarErrores.jsx";


const Crear = () => {

  //importamos el contexto de la biblioteca
  const { insertarLibro } = useContext(contextoBiblioteca);

  const libroInicial = {
    //se genera un UUID aleatorio para cada libro
    id: crypto.randomUUID(),
    titulo: "",
    autor: "",
    portada: "",
    completado: false,
    sinopsis: "",
  };

  //creamos un estado para controlar el formulario
  const [libro, setLibro] = useState(libroInicial);

  //función para actualizar cambios en el formulario
  const actualizarDato = (evento) => {
    const { name, value, checked } = evento.target;
    //comprobamos si el evento es un checkbox para actualizar el 
    //estado de forma correcta
    evento.target === "checkbox"
      ? setLibro({ ...libro, [name]: checked })
      : setLibro({ ...libro, [name]: value });
  };

  //Accedemos al VDOM para valores requeridos
  const tituloRef = useRef(null);
  const autorRef = useRef(null);
  const portadaRef = useRef(null);

  //Control de errores con el estado errores
  const [errores, setErrores] = useState([]);

  //función para validar el formulario
  const validarFormulario = () => {
    //almacenamos errores
    let arrayErrores = [];
    if (!/^[a-zA-Z0-9][a-zA-Z0-9 ]{2,20}$/.test(tituloRef.current.value)) {
      arrayErrores = [...arrayErrores, `El título no tiene formato válido (de 2 a 20 caracteres).`,];
    }
    if (!/^[a-zA-Z0-9][a-zA-Z0-9 ]{2,30}$/.test(autorRef.current.value)) {
      arrayErrores = [...arrayErrores, `El autor no tiene formato válido (de 2 a 30 caracteres).`,];
    }
    if (portadaRef.current.value === "") {
      arrayErrores = [...arrayErrores, `Debe indicar la URL de la portada.`,];
    }
    //actualizamos el estado de errores
    setErrores(arrayErrores);
    //devolvemos si hay errores o no
    return arrayErrores.length === 0;
  };

  //forzamos que se actualice el estado de errores
  useEffect(() => {
    console.log("UseEffect");
    console.log(`Se ha ejecutado el hook:  ${errores}`);
  }, [errores]);


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
              Portada*
            </label>
            <input
              ref={portadaRef}
              name='portada'
              className='form__input'
              type='text'
              placeholder='Escribe la URL de la imagen de portada'
              value={libro.portada || ""}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
              required
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
              className='form__input form__input--textarea'
              name='sinopsis'
              placeholder='Escribe la sinopsis del libro'
              value={libro.sinopsis || ""}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            ></textarea>
          </div>
          {/* mostramos los errores encima de los botones */}
          <MostrarErrores listaErrores={errores} />
          <div className='form__item form__item--boton'>
            <input
              type='button'
              value='Guardar en la biblioteca'
              className='boton boton--aceptar'
              onClick={(evento) => {
                //pedimos confirmacion y validamos
                validarFormulario() &&
                  confirm('¿Desea guardar este libro en la biblioteca?')
                  && insertarLibro(libro);
              }}
            />
            <input
              type='button'
              value='Limpiar el formulario'
              className='boton boton--limpiar'
              onClick={(evento) => {
                //limpiamos el formulario
                setLibro(libroInicial);
              }}
            />
          </div>
          <div className='form__item form__item--boton'>
            <Link to='/'>
              <input
                type='button'
                value='&lt; Atrás'
                className='boton boton--volver'
              />
            </Link>
          </div>
         
        </form>
      </section>
    </Fragment>
  );
};

export default Crear;

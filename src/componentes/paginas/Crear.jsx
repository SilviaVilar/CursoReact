import React, { Fragment } from "react";
import "./Crear.css";

const Crear = () => {
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
              name='titulo'
              className='form__input'
              type='text'
              placeholder='Escribe el título del libro'
              required
            ></input>
          </div>
          <div className='form__item'>
            <label htmlFor='autor' className='form__label'>
              Autor*
            </label>
            <input
              name='autor'
              className='form__input'
              type='text'
              placeholder='Escribe el/la autor/a del libro'
              required
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
            ></input>
          </div>
          <div className='form__item'>
            <input
              type='checkbox'
              name='completado'
              className='form__input form__input--checkbox'
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
            ></textarea>
          </div>
          <div className='form__item form__item--boton'>
            <input
              type='button'
              value='Guardar en la biblioteca'
              className='boton boton--aceptar'
            />
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Crear;

import React, { Fragment, useRef, useContext } from "react";
import './paginas/Buscar.css';
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";

const BuscarFormulario = (props) => {

    //referencia para acceder al valor del input
    const urlRef = useRef(null);

    //importamos función desde el contexto
    const {adecuarURL} = useContext(contextoBiblioteca);

    //recogemos props con desestructuración
    const {url, cambiarURL} = props;

    const limpiarInput = () => {
        urlRef.current.value = "";
    };

    return (
        <Fragment>
            <h2 className='buscar__titulo'>Buscar libros</h2>
            <input ref={urlRef} name='url' type='text'
                placeholder='Escriba por el tema que quiera buscar (autor, título, ISBN...)'
                className='form__input form__input--search' ></input>
            <button className='boton boton--buscar'
                onClick={(evento) => {
                    url ? (cambiarURL(undefined), limpiarInput())
                        : cambiarURL(adecuarURL(urlRef.current.value));
                }}
                // cambiamos la descripcion del botón si hay url o no
                > {url ? "Nueva" : "Buscar libros"}

            </button>
        </Fragment>
    );
}

export default BuscarFormulario;

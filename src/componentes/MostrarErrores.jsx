import React, { Fragment } from "react";
import "./MostrarErrores.css";

const MostrarErrores = (props) => {
    const errores  = props.listaErrores;
    return (
        <Fragment>
            <section className='form__errores'>
                {(Array.isArray(errores) && errores.length !==0) ? (
                    <ul className='form__errores-lista'>
                        {errores.map((error, indice) => {
                            return (
                                <li key={indice} className='form__errores-item'>
                                    {error}
                                </li>
                            );
                        })}
                    </ul>
                ) : null
                }

            </section>
        </Fragment >
    );
}

export default MostrarErrores;
import React, { Fragment, useState, useEffect } from "react";
import './ListadoResumen.css'

const ListadoResumen = (biblioteca) => {

    const [cantidad = 0, setCantidad] = useState([]);

    const contarLibros = () => {
        setCantidad(biblioteca.biblioteca.length);
    }

    useEffect(() => {
        contarLibros();
        console.log(`La biblioteca contiene ${cantidad} libro(s).`);
    }, [biblioteca]);

    return (

        <div className="muestra_cantidad">{/*Aquí va la cantidad de libros*/}
            La biblioteca contiene {cantidad ? ` ${cantidad} libro(s).` : ' cero libros.'}
        </div>
    );
}

export default ListadoResumen;
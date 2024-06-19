import React, { Fragment, useContext, useEffect, useState } from "react";
//import Libro from "./Libro";
import BuscarListado from "./BuscarListado";
import './paginas/Buscar.css';
import useLibrosAPI from "../hooks/useLibrosAPI";
import Cargando from "./Cargando";
import MostrarErrores from "./MostrarErrores";
import BusquedaResumen from "./BusquedaResumen";
import { contextoBiblioteca } from "../contextos/ProveedorLibros";

const BuscarResultado = (props) => {

    //recogemos props desestructuradas
    const { endpoint } = props;

    //traemos el estado del hook de useLibrosAPI
    const { busqueda, buscando, error } = useLibrosAPI(endpoint);

    //incluimos libros en la colección de la bibllioteca
    const incluirLibroAPI = (identificador) => {
        const libroBuscado = busqueda.filter((libro) => {
            return libro.id === identificador;
        }   );
        libroBuscado.length && insertarLibro(libroBuscado[0]);
    };

    //importamos insertarLibro desde el contexto
    const { insertarLibro } = useContext(contextoBiblioteca);

    return (
        <Fragment>
            {/* incluimos el número de libros de la búsqueda */}
            <BusquedaResumen busqueda={busqueda} />
            <div className='buscar__resultado'>
                {/* también pasamos en propos incluirLibrosApi */}
                {busqueda && <BuscarListado busqueda={busqueda} incluirLibroAPI={incluirLibroAPI}/>}
                {buscando && <Cargando />}
                {error && <MostrarErrores erroresAMostrar={error} />}        
            </div>
        </Fragment>
    );
};

export default BuscarResultado;
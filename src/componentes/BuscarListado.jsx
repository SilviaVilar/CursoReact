import React, { Fragment } from "react";
import Libro from "./Libro";
import MostrarErrores from "./MostrarErrores";
import './paginas/Buscar.css';

const BuscarListado = ({ busqueda, incluirLibroAPI }) => {

    return (
        <Fragment>
            <div className='buscar__resultado'>
                {busqueda
                    ? busqueda.map((datos_libro) => {
                        // pasamos también la función incluirLibrosAPI
                        return <Libro key={datos_libro.id} datos={{...datos_libro,incluirLibroAPI}}/>;
                    })
                    : <MostrarErrores erroresAMostrar={["No se han encontrado libros."]}/>}
            </div>
        </Fragment>
    );
};

export default BuscarListado;
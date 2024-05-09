import React, { Fragment } from "react";
import "./Contenido.css";
import ListadoLibros from "../ListadoLibros.jsx";

const Contenido = () => {
    return (
        <Fragment>
            <main className="main">
                <ListadoLibros />
            </main>
        </Fragment>
    );
};
export default Contenido;
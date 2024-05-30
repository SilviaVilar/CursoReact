import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio.jsx";
import Crear from "../paginas/Crear.jsx";
import Mostrar from "../paginas/Mostrar.jsx";
import Buscar from "../paginas/Buscar.jsx";
import Error from "../paginas/Error.jsx";

const Rutas = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/crear' element={<Crear />} />
        <Route path='/mostrar/:identificador' element={<Mostrar />} />
        <Route path='/buscar' element={<Buscar />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Fragment>
  );
};

export default Rutas;

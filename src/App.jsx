import React from "react";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Navegacion from "./componentes/estructura/Navegacion.jsx";
import Contenido from "./componentes/estructura/Contenido.jsx";
import PiePagina from "./componentes/estructura/PiePagina.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecera />
        <Navegacion />
        <Contenido />
        <PiePagina />
      </BrowserRouter>
    </>
  );
};

export default App;

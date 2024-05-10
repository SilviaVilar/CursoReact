import React from "react";
import { BrowserRouter } from "react-router-dom";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Navegacion from "./componentes/estructura/Navegacion.jsx";
import Contenido from "./componentes/estructura/Contenido.jsx";
import PiePagina from "./componentes/estructura/PiePagina.jsx";
import "./App.css";

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

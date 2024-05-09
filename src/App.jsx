import React from "react";
import "./App.css";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Navegacion from "./componentes/estructura/Navegacion.jsx";
import Contenido from "./componentes/estructura/Contenido.jsx";
import PiePagina from "./componentes/estructura/PiePagina.jsx";

const App = () => {
  return (
    <>
      <Cabecera />
      <Navegacion />
      <Contenido />
      <PiePagina />
    </>
  );
};

export default App;

import React, { Fragment, useState } from "react";
import "./Buscar.css";
import BuscarFormulario from "../BuscarFormulario";
import BuscarResultado from "../BuscarResultado";

const Buscar = () => {

  //estado para la url de la búsqueda
  const [URL, setURL] = useState(undefined);

  const cambiarURL = (nuevaURL) => {
    setURL(nuevaURL);
  };

  return (
    <Fragment>
      <section className='buscar'>
        {/* <h2 className='buscar__titulo'>Buscar libros</h2> */}
        <BuscarFormulario url={URL} cambiarURL={cambiarURL} />
        {URL && <BuscarResultado endpoint={URL} />}
      </section>
    </Fragment>
  );
};

export default Buscar;

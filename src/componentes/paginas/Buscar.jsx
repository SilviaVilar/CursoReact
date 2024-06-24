import React, { Fragment, useState } from "react";
import "./Buscar.css";
import BuscarFormulario from "../BuscarFormulario";
import BuscarResultado from "../BuscarResultado";

const Buscar = () => {
  const [URL, setURL] = useState("");

  const cambiarURL = (nuevaURL) => {
    setURL(nuevaURL);
  };

  return (
    <Fragment>
      <section className='buscar'>
        <BuscarFormulario url={URL} cambiarURL={cambiarURL} />
        {URL && <BuscarResultado endpoint={URL} />}
      </section>
    </Fragment>
  );
};

export default Buscar;

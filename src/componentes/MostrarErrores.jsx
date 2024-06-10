import React, { Fragment } from "react";
import "./MostrarErrores.css";

const MostrarErrores = ({ erroresAMostrar }) => {
  return (
    <Fragment>
      <div className='crear__errores'>
        {erroresAMostrar.map((error, indice) => {
          return (
            <div key={indice} className='crear__error'>
              {error}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default MostrarErrores;

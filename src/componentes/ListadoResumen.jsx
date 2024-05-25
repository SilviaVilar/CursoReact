import React, { Fragment } from "react";

const ListadoResumen = ({ elementos }) => {
  return (
    <Fragment>
      <div className='listadoResumen'>
        La biblioteca contiene
        {elementos ? ` ${elementos} libro(s).` : " cero libros."}
      </div>
    </Fragment>
  );
};

export default ListadoResumen;

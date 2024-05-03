//importamos los recursos necesarios para el componente
import React, {Fragment} from 'react';
import sin_portada from '../assets/sin_portada.png'

//se crea la función flecha que construirá el componente
const Libro = (props) => {
    //Aquí va código JS (vacío)
    //obtenemos los datos que interesan del objeto
    //const { sinopsis, completado, portada, titulo, autor, id } = props;
    const datos_libro = props.datos_libro;
    return (
        //Siempr es recomnedable envolver el contenido del codigo en Fragmentos
        <Fragment>
            {/* Aquí va código JSX */}
           <article id={datos_libro.id ? datos_libro.id : crypto.randomUUID()}>
                <img width='150px' height='225px' src={datos_libro.portada ? datos_libro.portada : sin_portada}></img>
                <div>
                    {datos_libro.titulo ? datos_libro.titulo : "No se ha especificado título"}
                </div>
                <div>
                    {datos_libro.autor ? datos_libro.autor : "No se ha especificado autor"}
                </div>
                <div>
                    {datos_libro.completado ? "Libro completado" : "Libro no completado"}
                </div>
                <div>
                    {datos_libro.sinopsis ? datos_libro.sinopsis : "No se ha especificado sinopsis"}
                </div>
            </article> 
        </Fragment>
    );
};

//se exporta la función que contiene el componente
export default Libro;
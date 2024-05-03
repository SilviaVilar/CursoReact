import React, {Fragment} from "react";
import biblioteca from "../assets/bbdd/biblioteca.json";
import Libro from "../componentes/Libro.jsx";

const ListadoLibros = () => {
    console.log(biblioteca);
    return (
        <Fragment>
            <h2>Listado de libros</h2>
            {/*Si libros es un array y contiene elementos*/}
            {Array.isArray(biblioteca.libros) && biblioteca.libros.length
             ? 
            /*se recorren los libros de biblioteca con map*/
             biblioteca.libros.map((datos_libro) => {
                //en cada iteración devolvemos un componenete de Libro
                return (
                    <div key={datos_libro.id}>
                         <Libro 
                       /* 
                        key={datos_libro.id}
                        id={datos_libro.id}
                        titulo={datos_libro.titulo}
                        autor={datos_libro.autor}
                        portada={datos_libro.portada}
                        completado={datos_libro.completado}
                        sinopsis={datos_libro.sinopsis}
                        */
                       datos_libro={datos_libro}
                    />
                    </div>
                   
                );
             }) 
             : /*No hay libros, se muestra error*/
                "No se han encontrado libros"
            }         
        </Fragment>
    );
};

export default ListadoLibros;
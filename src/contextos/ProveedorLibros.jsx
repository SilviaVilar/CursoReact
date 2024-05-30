import React, { Fragment, createContext, useState, useEffect } from "react";
import coleccion from "../assets/bbdd/biblioteca.json"

//Contexto para construir el proveedor
const contextoBiblioteca = createContext();

//Componente que provee la información
const ProveedorLibros = (props) => {

    const [biblioteca, setBiblioteca] = useState([]);

    //función para inicializar la biblioteca
    const inicializarBiblioteca = () => {
        setBiblioteca(coleccion.libros);
    };

    //función para borrar la biblioteca
    const borrarBiblioteca = () => {
        setBiblioteca([]);
    };

    //funciones para inventar un libro e insertarlo en la biblioteca
    const inventarLibro = () => {
        return {
            id: crypto.randomUUID(),
            titulo: "Yo, robot",
            autor: "Isaac Asimov",
            portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
            completado: false,
            sinopsis:
                "Esta obra visionaria tuvo una gran influencia en la ciencia ficción posterior, pero también en la propia ciencia de la robótica. Asimov formuló por primera vez las tres leyes fundamentales de la robótica, con claras implicaciones éticas y psicológicas. ¿Qué diferencia hay entre un robot inteligente y un ser humano? ¿Puede el creador de un robot predecir su comportamiento? ¿Debe la lógica determinar lo que es mejor para la humanidad? Yo, robot conecta entre sí una serie de historias de todo tipo de máquinas inteligentes a través de la robopsicóloga Susan Calvin. Estos robots son cada vez más perfectos y llegan a desafiar en ocasiones a sus creadores.",
        };
    };

    const insertarLibro = (libroAInsertar) => {
        // Se utiliza el spread operator para añadir el libro al estado "biblioteca".
        setBiblioteca([...biblioteca, libroAInsertar]);
    };


    //inicializamos biblioteca
    useEffect(() => {
        inicializarBiblioteca();
    }, []);

    //Trabajamos con el resumen de libros
    //Añadiremos la cantidad a la exportación del contexto
    const [cantidad, setCantidad] = useState(0);

    const contarLibros = () => {
        setCantidad(biblioteca.length);
    };

    useEffect(() => {
        contarLibros();
        console.log(`La biblioteca contiene ${cantidad} libro(s).`);
    }, [biblioteca]);


    //función para buscar un libro por su id
    const buscarLibro = (identificador) => {
        const libroBuscado = biblioteca.filter((libro) => {
            return libro.id === identificador;
        });
        return libroBuscado;
    };

    const [libroBorrado, setlibroBorrado] = useState({});
    //función para eliminar un libro por su id
    const borrarLibro = (identificador) => {
        const nuevosLibros = biblioteca.filter((libro) => {
            return libro.id !== identificador;
        });
        setBiblioteca(nuevosLibros);
        setlibroBorrado(buscarLibro(identificador));
    };



    //Objeto con las características a compartir en el contexto
    //Compartimos los datos y funciones con biblioteca
    const exportacion = {
        biblioteca,
        inicializarBiblioteca,
        borrarBiblioteca,
        inventarLibro,
        insertarLibro,
        cantidad,
        buscarLibro,
        borrarLibro,
        setlibroBorrado,
        libroBorrado
    };



    return (
        <Fragment>
            {/*código para el contexto*/}
            <contextoBiblioteca.Provider value={exportacion}>
                {props.children}
            </contextoBiblioteca.Provider>
        </Fragment>
    );
};

export default ProveedorLibros;
export { contextoBiblioteca };
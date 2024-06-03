import React, { Fragment, useState, useEffect, createContext } from "react";
import coleccion from "../assets/bbdd/biblioteca.json";
import { useNavigate } from "react-router-dom";

const contextoBiblioteca = createContext();

const ProveedorLibros = (props) => {
  // Función para navegar de froma programática.
  const navegar = useNavigate();
  // Estados del contexto (serán compartidos a los proveedores).
  const [biblioteca, setBiblioteca] = useState([]);

  const inicializarBiblioteca = () => {
    setBiblioteca(coleccion.libros);
  };
  const borrarBiblioteca = () => {
    setBiblioteca([]);
  };

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

  const buscarLibro = (identificador) => {
    const libroBuscado = biblioteca.filter((libro) => {
      return libro.id === identificador;
    });
    return libroBuscado;
  };

  const borrarLibro = (identificador) => {
    const nuevosLibros = biblioteca.filter((libro) => {
      return libro.id !== identificador;
    });
    setBiblioteca(nuevosLibros);
    navegar("/");
  };

  // Efectos del contexto (se carga la información al inicio).
  useEffect(() => {
    inicializarBiblioteca();
  }, []);

  const exportacion = {
    biblioteca,
    inicializarBiblioteca,
    borrarBiblioteca,
    inventarLibro,
    insertarLibro,
    buscarLibro,
    borrarLibro,
  };
  return (
    <Fragment>
      <contextoBiblioteca.Provider value={exportacion}>
        {props.children}
      </contextoBiblioteca.Provider>
    </Fragment>
  );
};
export default ProveedorLibros;
export { contextoBiblioteca };

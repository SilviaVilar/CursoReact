import React, { Fragment } from "react";
import LibroDetalles from "../LibroDetalles.jsx";
import "./Mostrar.css";

const Mostrar = () => {
  const libro = {
    id: "85f06643-f095-4a85-9d93-b9a78eb48r54",
    titulo: "Yo, robot",
    autor: "Isaac Asimov",
    portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
    completado: false,
    sinopsis:
      "Esta obra visionaria tuvo una gran influencia en la ciencia ficción posterior, pero también en la propia ciencia de la robótica. Asimov formuló por primera vez las tres leyes fundamentales de la robótica, con claras implicaciones éticas y psicológicas. ¿Qué diferencia hay entre un robot inteligente y un ser humano? ¿Puede el creador de un robot predecir su comportamiento? ¿Debe la lógica determinar lo que es mejor para la humanidad? Yo, robot conecta entre sí una serie de historias de todo tipo de máquinas inteligentes a través de la robopsicóloga Susan Calvin. Estos robots son cada vez más perfectos y llegan a desafiar en ocasiones a sus creadores.",
  };

  return (
    <Fragment>
      <section className='mostrar'>
        {libro ? (
          <LibroDetalles libroBuscado={libro} />
        ) : (
          "No se ha encontrado ningún libro."
        )}
      </section>
    </Fragment>
  );
};

export default Mostrar;

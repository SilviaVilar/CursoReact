import React, { useState, useEffect } from "react";

const useLibrosAPI = (urlABuscar) => {
  const [busqueda, setBusqueda] = useState(undefined);
  const [buscando, setBuscando] = useState(false);
  const [error, setError] = useState("");

  const traerLibrosAPI = (url) => {
    // Se cambia el estado al inicio de la comunicación.
    setBuscando(true);
    return fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setBusqueda(manipularDatosAPI(datos));
        // Creación de un error para probar la muestra de errores.
        //throw new Error("Error de prueba.");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        // Al final de la comunicación (errónea o no) se cambia el estado.
        setBuscando(false);
      });
  };

  const manipularDatosAPI = (busquedaLibrosAPI) => {
    // Se declara un array vacío.
    let librosConFormato = [];
    // Si la búsqueda tiene datos, se da formato libro y se guarda en librosConFormato.
    busquedaLibrosAPI.docs &&
      (librosConFormato = busquedaLibrosAPI.docs.map((documento) => {
        return adecuarLibro(documento);
      })); // Se devuelve librosConFormato (vacío o con datos).
    return librosConFormato;
  };

  const adecuarLibro = (libroAPI) => {
    return {
      id: crypto.randomUUID(),
      titulo: libroAPI.title ? libroAPI.title : "Sin especificar",
      autor: libroAPI.author_name ? libroAPI.author_name[0] : "Sin especificar",
      portada: libroAPI.cover_i
        ? `https://covers.openlibrary.org/b/id/${libroAPI.cover_i}.jpg`
        : undefined,
      completado: false,
      sinopsis: libroAPI.first_sentence
        ? libroAPI.first_sentence.toString()
        : "Ninguna",
    };
  };

  useEffect(() => {
    traerLibrosAPI(urlABuscar);
  }, []);

  return { busqueda, buscando, error };
};

export default useLibrosAPI;

import React, { useState, useEffect } from "react";

const useLibrosAPI = (urlABuscar) => {


    //estas funciones y estado vienen de BuscarResultado.jsx

    //estado para el resultado de la búsqueda
    const [busqueda, setBusqueda] = useState(undefined);

    //función para adecuar los datos de la API
    const traerLibrosAPI = (url) => {
        setBuscando(true);
        return fetch(url)
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((datos) => {
                setBusqueda(manipularDatosAPI(datos));
            })
            .catch((error) => {
                setError([...error,error.message]);
            }).finally(() => {  
                setBuscando(false);
            });
    };

    useEffect(() => {
        traerLibrosAPI(urlABuscar);
    }, []);

    const adecuarLibro = (libroApi) => {
        return {
            id: crypto.randomUUID(),
            titulo: libroApi.title ? libroApi.title : "Sin especificar",
            autor: libroApi.author_name ? libroApi.author_name : "Sin especificar",
            portada: libroApi.cover_i
                ? `https://covers.openlibrary.org/b/id/${libroApi.cover_i}.jpg`
                : undefined,
            completado: false,
            sinopsis: libroApi.first_sentence
                ? libroApi.first_sentence.toString()
                : "Sin especificar",
        };
    };

    const manipularDatosAPI = (busquedaLibrosAPI) => {
        let librosConFormato = [];
        busquedaLibrosAPI.docs &&
            (librosConFormato = busquedaLibrosAPI.docs.map((documento) => {
                return adecuarLibro(documento);
            }));
        return librosConFormato;
    };

    //nuevo estado para mostrar cargando
    const [buscando, setBuscando] = useState(false);

    //nuevo estado para mostrar errores
    const [error, setError] = useState([]);

//exportamos los estados de la búsqueda y la carga
    return { busqueda, buscando, error };

};

export default useLibrosAPI;
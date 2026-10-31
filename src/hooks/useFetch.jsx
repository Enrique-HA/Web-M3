import { useState, useEffect } from "react";

export function useFetch(peticion, parametro) {
  const [intento, setIntento] = useState(0);
  const [respuesta, setRespuesta] = useState({ parametro: null, intento: 0, datos: null, error: null });

  useEffect(() => {
    if (!parametro) return;

    let obsoleta = false;

    async function cargar() {
      try {
        const datos = await peticion(parametro);
        if (!obsoleta) setRespuesta({ parametro, intento, datos, error: null });
      } catch (error) {
        if (!obsoleta) setRespuesta({ parametro, intento, datos: null, error });
      }
    }
    cargar();

    return () => {
      obsoleta = true;
    };
  }, [peticion, parametro, intento]);

  const esActual = Boolean(parametro) && respuesta.parametro === parametro && respuesta.intento === intento;

  return {
    datos: esActual ? respuesta.datos : null,
    error: esActual ? respuesta.error : null,
    cargando: Boolean(parametro) && !esActual,
    reintentar: () => setIntento((i) => i + 1),
  };
}

import { normalizarSerie } from "./series.js";
import { leerCache, guardarCache } from "./storage.js";

const URL_BUSQUEDA = "https://api.tvmaze.com/search/shows";

export async function obtenerSeries(nombre) {
  const clave = nombre.toLowerCase();
  
  const enCache = leerCache(clave);
  if (Array.isArray(enCache)) return enCache;

  const respuesta = await fetch(`${URL_BUSQUEDA}?q=${encodeURIComponent(nombre)}`);

  if (!respuesta.ok) {
    throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
  }

  const datos = await respuesta.json();
  const series = datos.map((d) => normalizarSerie(d.show));
  guardarCache(clave, series);
  return series;
}
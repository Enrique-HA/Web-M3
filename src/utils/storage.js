const PREFIJO = "busca-serie-react";
const DURACION_MS = 30 * 60 * 1000; // Media hora

export function leerCache(clave) {
  try {
    const guardado = localStorage.getItem(PREFIJO + clave);
    if (guardado === null) return null;

    const { guardadoEn, datos } = JSON.parse(guardado);
    if (Date.now() - guardadoEn > DURACION_MS) return null; // caducada
    return datos;
  } catch (error) {
    console.warn("No se pudo leer la caché:", error);
    return null;
  }
}

export function guardarCache(clave, datos) {
  try {
    localStorage.setItem(PREFIJO + clave, JSON.stringify({ guardadoEn: Date.now(), datos }));
  } catch (error) {
    console.warn("No se pudo guardar la caché:", error);
  }
}

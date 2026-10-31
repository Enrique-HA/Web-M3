export function limpiarResumen(html) {
  if (!html) return "";
  const documento = new DOMParser().parseFromString(html, "text/html");
  return documento.body.textContent.trim();
}
export function normalizarSerie(show) {
  return {
    id: show.id,
    nombre: show.name,
    imagen: show.image?.medium ?? null,
    generos: show.genres ?? [],
    puntuacion: show.rating?.average ?? null,
    resumen: limpiarResumen(show.summary),
  };
}
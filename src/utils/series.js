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
export function contarGeneros(series) {
  const cantidadPorGenero = series.flatMap((serie) => serie.generos)
    .reduce((acumulador, genero) => {
      acumulador[genero] = (acumulador[genero] ?? 0) + 1;
      return acumulador;
    }, {});

  return Object.entries(cantidadPorGenero)
    .map(([nombre, cantidad]) => ({ nombre, cantidad }))
    .toSorted((a, b) => b.cantidad - a.cantidad);
}

export function filtrarPorGenero(series, genero) {
  return genero === "" ? series : series.filter((serie) => serie.generos.includes(genero));
}
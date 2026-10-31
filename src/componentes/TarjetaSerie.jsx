export default function TarjetaSerie({serie, esFavorita, onAlternarFavorita }) {

  return (
    <article>
      <div>
        {serie.imagen ? (<img src={serie.imagen} alt={`Portada de ${serie.nombre}`}/>)
                       :(<div>Sin imagen</div>)}

      </div>
      <button
          type="button"
          aria-pressed={esFavorita}
          aria-label={
            esFavorita ? `Quitar ${serie.nombre} de Mi lista` : `Guardar ${serie.nombre} en Mi lista`
          }
          onClick={() => onAlternarFavorita(serie)}
        >
          {esFavorita ? "★" : "☆"}
        </button>
      <h2>{serie.nombre}</h2>

      <p>
        {serie.puntuacion === null ? "Sin puntuación" : `${serie.puntuacion}`}
      </p>

      {serie.generos.length > 0 && (
        <ul>
          {serie.generos.map((genero) => (
            <li key={genero}>{genero}</li>
          ))}
        </ul>
      )}

      <p>
        {serie.resumen || "Sin descripción."}
      </p>

    </article>
  );
}

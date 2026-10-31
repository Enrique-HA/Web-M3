export default function TarjetaSerie({serie}) {

  return (
    <article>
      <div>
        {serie.imagen ? (<img src={serie.imagen} alt={`Portada de ${serie.nombre}`}/>)
                       :(<div>Sin imagen</div>)}

      </div>

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

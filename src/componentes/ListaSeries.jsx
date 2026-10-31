import TarjetaSerie from "./TarjetaSerie.jsx";

export default function ListaSeries({series, favoritas, onAlternarFavorita }) {

  const idsFavoritas = new Set(favoritas.map((f) => f.id));
  return (
    <>
      <p>
        {series.length} {series.length === 1 ? "serie" : "series"}
      </p>

      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <TarjetaSerie
              serie={serie}
              esFavorita={idsFavoritas.has(serie.id)}
              onAlternarFavorita={onAlternarFavorita}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

import TarjetaSerie from "./TarjetaSerie.jsx";

export default function ListaSeries({series}) {


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
            />
          </li>
        ))}
      </ul>
    </>
  );
}

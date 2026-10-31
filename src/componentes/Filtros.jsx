export default function Filtros({ generos, genero, onCambiarGenero}) {
  return (
    <div>
      <label>
        Género
        <select value={genero} onChange={(e) => onCambiarGenero(e.target.value)}>
          <option value="">Todos los géneros</option>
          {generos.map((g) => (
            <option key={g.nombre} value={g.nombre}>
              {`${g.nombre} (${g.cantidad})`}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

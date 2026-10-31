const VISTAS = [
  { id: "busqueda", etiqueta: "Resultados" },
  { id: "favoritas", etiqueta: "Mi lista" },
];

export default function SelectorVista({ vista, onCambiarVista, totalFavoritas }) {
  return (
    <nav aria-label="Vista">
      {VISTAS.map((v) => (
        <button
          key={v.id}
          type="button"
          aria-pressed={v.id === vista}
          onClick={() => onCambiarVista(v.id)}
        >
          {v.id === "favoritas" ? `${v.etiqueta} (${totalFavoritas})` : v.etiqueta}
        </button>
      ))}
    </nav>
  );
}

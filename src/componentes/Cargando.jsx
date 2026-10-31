export default function Cargando() {
  return (
    <div role="status">
      <div aria-hidden="true">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} />
        ))}
      </div>
      <p>Buscando series…</p>
    </div>
  );
}

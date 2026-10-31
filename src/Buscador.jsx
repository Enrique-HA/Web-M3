import { useState } from "react";

export default function Buscador({onBuscar}) {
  const [texto, setTexto] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    onBuscar(texto.trim());
  }

  const sinTexto = texto.trim() === "";

  return (
    <form onSubmit={manejarEnvio} role="search">
      <label>Nombre de la serie</label>
      <div>
        <input
          type="search"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Breaking Bad, The Wire, Dark…"
        />
        <button type="submit" disabled={sinTexto}>Buscar</button>
      </div>
    </form>
  );
}
 
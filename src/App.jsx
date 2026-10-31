import { useState } from 'react'
import Buscador from "./componentes/Buscador.jsx";
import SelectorVista from "./componentes/SelectorVista.jsx";
import Filtros from "./componentes/Filtros.jsx";
import ListaSeries from "./componentes/ListaSeries.jsx";
import Cargando from "./componentes/Cargando.jsx";
import Mensaje from "./componentes/Mensaje.jsx";
import { useFetch } from "./hooks/useFetch.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage.jsx";
import { obtenerSeries } from "./utils/api.js";
import { contarGeneros, filtrarPorGenero} from "./utils/series.js";
import './estilos.css'

export default function App() {

  const [consulta, setConsulta] = useState("");
  const [vista, setVista] = useState("busqueda");
  const [genero, setGenero] = useState(""); 
  const [favoritas, setFavoritas] = useLocalStorage("busca-serie:favoritas", []);


  const { datos, cargando, error, reintentar } = useFetch(obtenerSeries, consulta);

  const enBusqueda = vista === "busqueda";
  const origen = enBusqueda ? (datos ?? []) : favoritas;
  const generos = contarGeneros(origen);

  const generoActivo = generos.some((g) => g.nombre === genero) ? genero : "";
  const visibles = filtrarPorGenero(origen, generoActivo);


  function buscar(nombre) {
    setConsulta(nombre);
    setVista("busqueda");
    setGenero("");
  }

  function alternarFavorita(serie) {
    setFavoritas((actuales) =>
      actuales.some((f) => f.id === serie.id)
        ? actuales.filter((f) => f.id !== serie.id)
        : [...actuales, serie]
    );
  }

  let contenido;
  if (origen.length > 0) {
    contenido = (
      <ListaSeries series={visibles} favoritas={favoritas} onAlternarFavorita={alternarFavorita} />
    );
  } else if (!enBusqueda) {
    contenido = (
      <Mensaje titulo="Tu lista está vacía">
        <p>Pulsa ☆ en cualquier serie para guardarla aquí.</p>
      </Mensaje>
    );
  } else if (cargando) {
    contenido = <Cargando />;
  } else if (error) {
    contenido = (
      <Mensaje tipo="error" titulo="No se pudieron cargar las series">
        <p>Comprueba tu conexión e inténtalo de nuevo. ({error.message})</p>
        <button type="button" onClick={reintentar}>
          Reintentar
        </button>
      </Mensaje>
    );
  } else if (consulta === "") {
    contenido = (
      <Mensaje titulo="Empieza por buscar una serie">
        <p>Escribe un nombre arriba y pulsa Intro.</p>
      </Mensaje>
    );
  } else {
    contenido = (
      <Mensaje titulo="Sin resultados">
        <p>No hay series que coincidan con «{consulta}». Prueba con otro nombre.</p>
      </Mensaje>
    );
  }

  return (
    <>
      <header>
        <div>
          <h1>Busca-Serie</h1>
          <p>Encuentra tu serie favorita</p>
          <Buscador onBuscar={buscar} />
        </div>
      </header>

      <main>
        <SelectorVista vista={vista} onCambiarVista={setVista} totalFavoritas={favoritas.length} />

        {origen.length > 0 && (
          <Filtros
            generos={generos}
            genero={generoActivo}
            onCambiarGenero={setGenero}
          />
        )}

        {contenido}
      </main>

      <footer>
        <p>
          Datos de <a href="https://www.tvmaze.com/">TVmaze</a>
        </p>
      </footer>
    </>
  );
}

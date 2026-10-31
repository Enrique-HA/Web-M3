import { useState, useEffect } from "react";

export function useLocalStorage(clave, valorInicial) {

  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave);
      return guardado !== null ? JSON.parse(guardado) : valorInicial;
    } catch (error) {
      console.warn(`No se pudo leer "${clave}":`, error);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.warn(`No se pudo guardar "${clave}":`, error);
    }
  }, [clave, valor]);

  return [valor, setValor];
}

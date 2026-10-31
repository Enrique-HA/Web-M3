# Busca-Serie

M2 · Reactor Core — Web Development I.

## Funcionamiento
Mediante un buscador puedes obtener información sobre series. Dicha información está sacada de TVmaze mediante una API. Esta vez, se usa React para mantener Buscador,Filtros... etc como componentes separados. Una vez encontradas, se peude filtrar por género, y añadir a la lista de favoritos

## Uso de IA
Usé chatGPT para varias cosas. Como el css no es un aspecto importante, le pedí "hazme el archivo css de este código sin añadir className ni ids, algo sencillo". También le pedí ayuda con los hooks personalizados, a entender el concepto, y escribir en ellos lo que quería que lograsen. Me ayudó especialmente en useFetch: "Si a mitad de carga de petición, llegase otra, qué puedo hacer para no solapar los datos?" Y me sugirió usar un booleano "obsoleta" y otro "esActual" para comprobar en todo momento que se está trabajando con la última petición. En series.js, me hizo la función limpairResumen, para dejar el texto puro, sin etiquetas. Una vez hechas todas las piezas, me ayudó a juntarlas en App.jsx. Por ejemplo, me dio la idea de usar condicionales para que la variable "contenido" pudiese tener un componente ListaSeries, o uno Mensaje... Por último, me ayudó dándome la idea de una variable "origen" en App, que me permitiese conocer desde qué punto de la página se partía

## Autopsia
1. No estaba seguro de cómo mostrar los mensajes del tipo "X resultados, no hay resultados,cargando...". Al principio pensé en escribirlos directamente, pero acabé
creando un módulo Mensaje para cada uno, que contuviese un título, un tipo de mensaje (info,error) y el propio contenido del mensaje (children)
2. Cómo distinguir las búsquedas y los favoritos. Al principio, pensé en hacer un componente asilado, pero este entonces tendría su propio filtro y otras operaciones. Al final simplemente hice un estado "vista" que puede ser la vista de búsqueda o de favoritos. Cada vez que se renderiza, todos los cálculos que se hagan son independientes de su origen
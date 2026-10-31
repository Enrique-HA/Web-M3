export default function Mensaje({ titulo, tipo = "info", children }) {
  return (
    <div role={tipo === "error" ? "alert" : "status"}>
      <h2>{titulo}</h2>
      <div>{children}</div>
    </div>
  );
}

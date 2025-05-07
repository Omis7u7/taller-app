import { useEffect, useState } from "react";
import { obtenerCarros } from "../api/carros";

export default function ClientePanel() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    cargarCarros();
  }, []);

  const cargarCarros = async () => {
    const res = await obtenerCarros();
    setCarros(res.data);
  };

  return (
    <div>
      <h2>Panel del Cliente</h2>
      <p>Aquí puedes revisar el estado de tu vehículo.</p>
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>
            <strong>Placa:</strong> {carro.placa}<br />
            <strong>Estado:</strong> {carro.estado}<br />
            <strong>Descripción:</strong> {carro.descripcion}<br />
            <strong>Piezas:</strong> {carro.piezas}<br />
            <strong>Precio:</strong> ${carro.precio}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

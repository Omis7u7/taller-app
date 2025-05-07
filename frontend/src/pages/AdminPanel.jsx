import { useEffect, useState } from "react";
import { obtenerCarros, agregarCarro, actualizarCarro } from "../api/carros";

export default function AdminPanel() {
  const [carros, setCarros] = useState([]);
  const [nuevoCarro, setNuevoCarro] = useState({
    placa: "",
    descripcion: "",
    piezas: "",
    precio: "",
    estado: "diagnostico"
  });

  useEffect(() => {
    cargarCarros();
  }, []);

  const cargarCarros = async () => {
    const res = await obtenerCarros();
    setCarros(res.data);
  };

  const manejarCambio = (e) => {
    setNuevoCarro({ ...nuevoCarro, [e.target.name]: e.target.value });
  };

  const guardarCarro = async () => {
    await agregarCarro(nuevoCarro);
    setNuevoCarro({ placa: "", descripcion: "", piezas: "", precio: "", estado: "diagnostico" });
    cargarCarros();
  };

  const cambiarEstado = async (id, nuevoEstado) => {
    await actualizarCarro(id, { estado: nuevoEstado });
    cargarCarros();
  };

  return (
    <div>
      <h2>Panel del Administrador</h2>
      <input name="placa" placeholder="Placa" value={nuevoCarro.placa} onChange={manejarCambio} />
      <input name="descripcion" placeholder="Descripción" value={nuevoCarro.descripcion} onChange={manejarCambio} />
      <input name="piezas" placeholder="Piezas" value={nuevoCarro.piezas} onChange={manejarCambio} />
      <input name="precio" placeholder="Precio" value={nuevoCarro.precio} onChange={manejarCambio} />
      <button onClick={guardarCarro}>Guardar carro</button>

      <h3>Lista de carros</h3>
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>
            <strong>{carro.placa}</strong> - {carro.estado} <br />
            <small>{carro.descripcion} | Piezas: {carro.piezas} | ${carro.precio}</small>
            <div>
              <select value={carro.estado} onChange={(e) => cambiarEstado(carro.id, e.target.value)}>
                <option value="llegada">Llegada</option>
                <option value="diagnostico">Diagnóstico</option>
                <option value="espera">En espera de piezas</option>
                <option value="lista">Lista</option>
                <option value="pendiente">Pendiente de pago</option>
                <option value="pagada">Pagada</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

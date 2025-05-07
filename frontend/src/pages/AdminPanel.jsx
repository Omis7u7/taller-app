import { useState } from "react";

const estados = [
  "Llegada",
  "Diagnóstico",
  "Espera de piezas",
  "En reparación",
  "Lista",
  "Pendiente de pago",
  "Pagado",
];

const AdminPanel = () => {
  const [carros, setCarros] = useState([]);
  const [nuevoCarro, setNuevoCarro] = useState({
    placa: "",
    descripcion: "",
    piezas: "",
    costo: "",
    estado: "Llegada",
  });

  const agregarCarro = () => {
    setCarros([...carros, { ...nuevoCarro }]);
    setNuevoCarro({
      placa: "",
      descripcion: "",
      piezas: "",
      costo: "",
      estado: "Llegada",
    });
  };

  const actualizarEstado = (index, nuevoEstado) => {
    const copia = [...carros];
    copia[index].estado = nuevoEstado;
    setCarros(copia);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Administrador</h1>

      <h2>Registrar nuevo carro</h2>
      <input
        placeholder="Placa"
        value={nuevoCarro.placa}
        onChange={(e) => setNuevoCarro({ ...nuevoCarro, placa: e.target.value })}
      />
      <input
        placeholder="Descripción"
        value={nuevoCarro.descripcion}
        onChange={(e) => setNuevoCarro({ ...nuevoCarro, descripcion: e.target.value })}
      />
      <input
        placeholder="Piezas necesarias"
        value={nuevoCarro.piezas}
        onChange={(e) => setNuevoCarro({ ...nuevoCarro, piezas: e.target.value })}
      />
      <input
        placeholder="Costo estimado"
        type="number"
        value={nuevoCarro.costo}
        onChange={(e) => setNuevoCarro({ ...nuevoCarro, costo: e.target.value })}
      />
      <button onClick={agregarCarro}>Agregar</button>

      <h2>Lista de carros</h2>
      {carros.map((carro, index) => (
        <div key={index} style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
          <strong>{carro.placa}</strong> - {carro.descripcion}<br />
          Piezas: {carro.piezas}<br />
          Costo: ${carro.costo}<br />
          Estado:
          <select
            value={carro.estado}
            onChange={(e) => actualizarEstado(index, e.target.value)}
          >
            {estados.map((estado) => (
              <option key={estado} value={estado}>{estado}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;

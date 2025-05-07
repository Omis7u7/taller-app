import axios from "axios";

const API = "http://localhost:3001/carros";

// Obtener todos los carros
export const obtenerCarros = () => axios.get(API);

// Agregar un nuevo carro
export const agregarCarro = (carro) => axios.post(API, carro);

// Actualizar un carro
export const actualizarCarro = (id, data) => axios.patch(`${API}/${id}`, data);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { CadastroCliente } from "./pages/cadastro-cliente";
import Calendario from "./pages/calendario.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/calendario" element={<Calendario />} /> 
      </Routes>
    </BrowserRouter>
  );
}

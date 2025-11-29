import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { CadastroCliente } from "./pages/cadastro-cliente";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
      </Routes>
    </BrowserRouter>
  );
}

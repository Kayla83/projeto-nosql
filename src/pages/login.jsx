import "../style/login.css";
import logo from "../assets/logo-cavalo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="centro">
      <form>

        <img src={logo} alt="Logo cavalo" className="logo" />
        <h1>Login</h1>

        <div>
          <input type="text" placeholder="Informe o seu e-mail" />
          <br /><br />
          <input type="password" placeholder="Informe a sua senha" />
          <br />
        </div>

        <br />
        {/* Botão agora leva para o calendário */}
        <button type="button" onClick={() => navigate("/calendario")}>
          Entrar
        </button>

        <div className="signup-link">
          <p>
            Não tem uma conta?{" "}
            <a
              onClick={() => navigate("/cadastro-cliente")}
              style={{ cursor: "pointer" }}
            >
              Registrar
            </a>
          </p>
        </div>

      </form>
    </div>
  );
};

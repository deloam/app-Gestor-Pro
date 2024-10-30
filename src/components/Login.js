import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import "../Styles/Login.css"; // Importando o arquivo CSS

const Login = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (password === "1") {
      navigate("/institution"); // Redireciona para a página da Instituição
    } else if (password === "2") {
      navigate("/technician"); // Redireciona para a página do Técnico
    } else {
      alert("Senha inválida!"); // Mensagem de erro
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <h2 className="app-name">Gestor Pro</h2>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email-cpf">E-mail ou CPF</label>
            <input type="text" id="email-cpf" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
              required
            />
          </div>
          <button
            type="button"
            className="forgot-password"
            onClick={() =>
              alert("Função de recuperação de senha não implementada.")
            }
          >
            Esqueci a senha
          </button>
          <button type="submit" className="btn-primary">
            Entrar
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate("/create-account")}
          >
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

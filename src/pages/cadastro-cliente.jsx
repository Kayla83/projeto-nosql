import "../style/cadastro-cliente.css"

export const CadastroCliente = () => {
  return (
    <div className="centro">
      <h2>Cadastro Cliente</h2>

      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Insira o seu nome"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Insira o seu melhor e-mail"
        />
      </div>

      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Informe uma senha"
        />
      </div>
      
      <button className="btn">Cadastrar</button>
    </div>
  )
}

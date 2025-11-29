import "../style/cadastro-cavalo.css";

export const CadastroCavalo = () => {
    return (
        <div className="centro">

            <h2>Cadastro do Cavalo</h2>

            <div className="form-group">
                <label>Nome do Cavalo:</label>
                <input type="text" placeholder="Insira o nome do Cavalo" />
            </div>

            <div className="form-group">
                <label>Raça:</label>
                <input type="text" placeholder="Ex: Mangalarga, Árabe..." />
            </div>

            <div className="form-group">
                <label>Porte:</label>
                <input type="text" placeholder="Pequeno, médio ou grande" />
            </div>

        </div>
    );
};

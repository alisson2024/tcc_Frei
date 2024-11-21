import "./index.scss";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MagicMotion } from "react-magic-motion";

import axios from "axios";

export default function ConsultarTabelaLista() {
    const [limite, setLimite] = useState(5);
    const [produtos, setProdutos] = useState([]);
    const [mostrarVermais, setMostrarVermais] = useState(true);

    const Navigate = useNavigate();
    const host = "localhost:3131";
    const [token, setToken] = useState(null);


    useEffect(() => {
        let token = localStorage.getItem("USUARIO");
        setToken(token);

        if (token === "null") {
            Navigate("/");
        }
    }, [Navigate]);


    const buscar = useCallback(
        async (token) => {
            const url = `http://${host}/select/produto/?total=${limite}&x-access-token=${token}`;
            let resp = await axios.get(url);

            const itens = Array.isArray(resp.data) ? resp.data : [];

            setProdutos(itens);
        },
        [limite]
    );

    async function VerMais() {
        if (limite !== produtos.length) {
            setMostrarVermais(false);
        }

        let novoLimite = limite * 2;
        setLimite(novoLimite);

        await buscar(token);
    }

    

    async function deletar(id, token) {
        // Remova o parâmetro id
        const url = `http://${host}/delete/produto/${id}?x-access-token=${token}`; // Substitua o parâmetro id
        await axios.delete(url);

        await buscar(token);
    }

    useEffect(() => {
        buscar(token);
    }, [buscar, token]);

    return (
        <div className="componente-TabelaLista">
            <div className="TabelaLista" style={{ overflow: "auto" }} >
                {produtos.length > 0 ? (
                    <table>
                        <thead>
                            <tr className="bak">
                                <th>ID</th>
                                <th>nome</th>
                                <th>categoria</th>
                                <th>Descricao</th>
                                <th>Valor</th>
                                <th>Estoque</th>
                                <th>Disponivel</th>
                                <th>Alterar ou excluir</th>
                            </tr>
                        </thead>

                        <tbody>
                            {produtos.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        #{item.id.toString().padStart(2, "0")}
                                    </td>
                                    <td>{item.nome}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.estoque}</td>
                                    {/* <td>{new Date(item.vinganca).toLocaleDateString()}</td> */}
                                    <td>{item.disponivel ? "Sim" : "Não"}</td>
                                    <td>
                                        <MagicMotion>
                                            <Link to={`/cadastrar/${item.id}`}>
                                                <img
                                                    src="/assets/images/editar.png"
                                                    alt="icone_alterar"
                                                   
                                                />
                                            </Link>

                                            <Link
                                                onClick={() =>
                                                    deletar(item.id, token)
                                                }
                                            >
                                                <img
                                                    src="/assets/images/Remover.svg"
                                                    alt="icone_lixo"
                                                
                                                />
                                            </Link>
                                        </MagicMotion>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="nenhum">
                        <p>Nenhum produto encontrado</p>
                    </div>
                )}
            </div>

            {mostrarVermais && (
                <div className="verMais">
                    <hr />
                        <button onClick={VerMais}>
                            <p>
                                Ver Mais
                            </p>
                        </button>
                    <hr />
                </div>
            )}
        </div>
    );
}
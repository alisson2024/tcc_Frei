
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Landing/index.jsx";
import Tabela from "./pages/cadastrar/index.jsx";
import Consultar from "./pages/consultar/index.jsx";
import Produto from "./pages/Produto/index.jsx";
import Cadastrar from "./pages/cadastrar/index.jsx";
import Login from "./pages/Login/index.jsx";
import Not from "./pages/not_found/index.jsx";
import Sobre from "./pages/sobrenos/index.jsx";
import Ajuda from "./pages/ajuda/index.jsx"
import  Produtos  from "./pages/Produtos/index.jsx";
import Esqueceu_senha_codigo from "./pages/Esqueceu_Codigo/index.jsx";
import Esqueceu_senha_email from "./pages/esqueceu_senha_email/index.jsx";

//excluir depois
import MenuUsuario from "./components/MenuUsuario/index.jsx";

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/tabela" element={<Tabela />} />
                <Route path="/consultar" element={<Consultar />} />
                
                <Route path="/produto" element={<Produto />} />
                <Route path="/produto/:id" element={<Produto />} />


                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/cadastrar/:id" element={<Cadastrar />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/ajuda" element={<Ajuda/>} />
                <Route path="/produtos" element={<Produtos/>} />
                
                <Route path="/Menu" element={<MenuUsuario />} />
                <Route path="/esqueceuc" element={<Esqueceu_senha_codigo />} />
                <Route path="/esqueceu_senha_email" element={<Esqueceu_senha_email />} />
                <Route path="*" element={<Not />} />
            </Routes>
        </BrowserRouter>
    )
}
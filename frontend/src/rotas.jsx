
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App/app.jsx";
import Rodape from "./components/rodape/index.jsx";

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Rodape />}/>
            </Routes>
        </BrowserRouter>
    )

}
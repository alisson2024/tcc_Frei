import './index.scss';
import { Link } from "react-router-dom"


export default function Card({ imagem, alt, preco, nome }) {
    return (

        <div className='card-component'>

            <Link>
                <div>
                    <img src={imagem} alt={alt} />

                    <h3>R${Number(preco).toFixed(2)}</h3>

                    <p>{nome}</p>
                </div>
            </Link>
        </div>

    )
}
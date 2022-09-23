import "./style.css";
import { Link } from 'react-router-dom'
export const Menu = () => {
    return (
        <div>
            <header>
                <h1 className='Logo'>Harry Styles</h1>
                <nav className='menu'>
                    <ul>
                        <li><Link to="/home">Novidades</Link> </li>
                        <li><Link to="/sobre">Sobre</Link> </li>
                        <li><Link to="/contato">Contato</Link></li>

                    </ul>
                </nav>
            </header>
        </div>
    );
};
import React from 'react';
import Logo from './img/logo.png';
import { Link } from 'react-scroll';
import './style.css';

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <nav>
                <ul className='lista'>
                    <li>
                        <Link to="produtos" smooth={true} duration={1000}>Produtos</Link>
                    </li>
                    <li>
                        <Link to="contato" smooth={true} duration={1000}>Contato</Link>
                    </li>
                    <li>
                        <Link to="avaliacoes" smooth={true} duration={1000}>Avaliação</Link>
                    </li>
                </ul>
            </nav>
            <div className='button-container'>
                <button>
                    Peça pelo Whatsapp
                </button>
            </div>
        </header>
    );
}

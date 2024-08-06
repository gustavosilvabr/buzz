import React from 'react';
import Logo from './img/logo.png';
import { Link } from 'react-scroll';
import { FaInstagram } from 'react-icons/fa';
import './style.css';

export default function Header() {
    const handleButtonClick = () => {
        window.open('https://wa.me/5561982635975?text=Ola%2C%20Gostaria%20de%20falar%20com%20o%20atendente.', '_blank', 'noopener,noreferrer');
    }
    
    return (
        <header>
            <img src={Logo} alt="Logo" className="header-logo" />
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
                <button onClick={handleButtonClick}>
                    Peça pelo Whatsapp
                </button>
              
            </div>
        </header>
    );
}

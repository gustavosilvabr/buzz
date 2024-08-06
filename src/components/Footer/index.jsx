import React from 'react';
import Logo from './logo.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import './style.css';
import ImgPagamento from './pagamento.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className='footer-container-logo'>
                        <img src={Logo} alt="Logo" className="footer-logo" />
                    </div>
                    <nav className='nav-footer'>
                        <h2>Paginas</h2>
                        <ul className="footer-nav">
                            <li><a href="#produtos">Produtos</a></li>
                            <li><a href="#contato">Contato</a></li>
                            <li><a href="#avaliacoes">Avaliação</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-right">
                    <h2>Contato</h2>
                    <ul className="footer-contact">
                        <li>
                            <FaPhone className="footer-icon" />
                            <span>(61) 982635975</span>
                        </li>
                        <li>
                            <FaEnvelope className="footer-icon" />
                            <span>contato@buzzcalcados.com.br</span>
                        </li>
                        <li>
                            <FaMapMarkerAlt className="footer-icon" />
                            <span>Brasilia-DF</span>
                        </li>
                        <li>
                            <FaInstagram className="footer-icon" />
                            <a href="https://www.instagram.com/buzzcalc_?igsh=MWhlN3B1dm96aTg3Yg==" target="_blank" rel="noopener noreferrer">
                                buzzcalçados
                            </a>
                        </li>
                    </ul>
                    <div className="footer-payment">
                        <h2>Formas de Pagamento</h2>
                        <div className="payment-icons">
                            <img src={ImgPagamento} alt="Formas de pagamento" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import React from 'react';
import suporteImg from  './logo.webp'; // Substitua pelo caminho da sua imagem de suporte
import './style.css';

export default function SectionSuporte() {
    const handleButtonClick = () => {
        window.open('https://wa.me/5561982635975?text=Ola%2C%20Gostaria%20de%20falar%20com%20o%20atendente.', '_blank', 'noopener,noreferrer');
    }

    return (
        <section id='contato' className="sessao-suporte" >
            <div className="container-suporte" >
                <div className="img-suporte" >
                    <img src={suporteImg} alt="Suporte" />
                </div>
                <div className="content-suporte">
                    <h1>ENTRE EM CONTATO</h1>
                    <p>
                        Nossa equipe está sempre à disposição para ajudar você. Se tiver qualquer dúvida ou precisar de assistência, entre em contato conosco pelo WhatsApp.
                    </p>
                    <button className="btn-suporte" 
                     onClick={handleButtonClick}>FALAR COM O SUPORTE</button>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import suporteImg from './logo.webp'; // Substitua pelo caminho da sua imagem de suporte
import './style.css';

export default function SectionSuporte() {
    return (
        <section id='contato' className="sessao-suporte" >
            <div className="container-suporte" >
                <div className="img-suporte" >
                    <img src={suporteImg} alt="Suporte" />
                </div>
                <div className="content-suporte">
                    <h1>ENTRE EM CONTATO</h1>
                    <p>
                        Nossa equipe está sempre à disposição para ajudar você. Se tiver qualquer dúvida ou precisar de assistência, entre em contato conosco pelo WhatsApp. Estamos aqui para garantir uma experiência de compra tranquila e satisfatória.
                    </p>
                    <button className="btn-suporte">
                        Suporte Via Whatsapp
                    </button>
                </div>
            </div>
        </section>
    );
}

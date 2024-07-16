import React, { useState } from 'react';
import './style.css';
import Img1 from './img1.jpg';
import Review from './review.png';
import ArrowIcon from './arrow.png'; // Importe o ícone da seta como necessário

export default function Produtos() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='container-cards'>
                <div className='card'>
                    <div className='img-container' onClick={openModal}>
                        <img className='img' src={Img1} alt="" />
                        <div className='overlay'>
                            <p className='overlay-text'>Clique para ver mais detalhes</p>
                            <img className='arrow-icon' src={ArrowIcon} alt='Seta para indicar clique' />
                        </div>
                    </div>
                    <h1>Rasteirinha Feminina Marrom Estilo Casual Antiderrapante</h1>
                    <div className='container-preco-review'>
                        <div className='preco'>
                            <span>R$70,00</span>
                            <h1>R$50,00</h1>
                        </div>
                        <div className='review'>
                            <img src={Review} alt="" />
                            <span>235 Review</span>
                        </div>
                    </div>
                    <div className='button-card'>
                        <button>
                            Peça pelo Whatsapp
                        </button>
                    </div>
                    <p className='click-info'>Clique na imagem para ver mais sobre o produto</p>
                </div>
            </div>

            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <button className='close-modal' onClick={closeModal}>X</button>
                        <div className='modal-left'>
                            <img className='img' src={Img1} alt="" />
                        </div>
                        <div className='modal-right'>
                            <h1>Rasteirinha Feminina Marrom Estilo Casual Antiderrapante</h1>
                            <div className='modal-select'>
                                <label htmlFor='size'>Tamanhos:</label>
                                <select id='size'>
                                    {['35/36', '37/38', '39/40', '41/42', '43/44'].map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='modal-select'>
                                <label htmlFor='color'>Cor:</label>
                                <select id='color'>
                                    {['Verde', 'Branco', 'Preto', 'Marrom'].map(color => (
                                        <option key={color} value={color}>{color}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='container-button-modal'>
                                <button className='btn-comprar'>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

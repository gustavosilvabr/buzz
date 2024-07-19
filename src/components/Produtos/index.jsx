import React, { useState } from 'react';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from './img1.jpg';
import Video01 from './video02.mp4';
import Img2 from './img1.jpg'; // Adicione outras imagens conforme necessário
import Review from './review.png';
import ArrowIcon from './arrow.png';
import ReactPlayer from 'react-player';

export const products = [
    { id: 1, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 2, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 3, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 4, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 5, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 6, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 7, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 8, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 9, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 10, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 11, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 },
    { id: 12, name: 'Rasteirinha Feminina Marrom Estilo Casual Antiderrapante', price: 50.00, originalPrice: 70.00, image: Img1 }
];

export default function Produtos() {
    const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 6));
    const [isShowingMore, setIsShowingMore] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const showMoreProducts = () => {
        setDisplayedProducts(products);
        setIsShowingMore(true);
    };

    const showLessProducts = () => {
        setDisplayedProducts(products.slice(0, 6));
        setIsShowingMore(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='container-cards'>
                {displayedProducts.map((product) => (
                    <div className='card' key={product.id}>
                        <div className='img-container' onClick={() => openModal(product)}>
                            <img className='img' src={product.image} alt={product.name} />
                            <div className='overlay'>
                                <p className='overlay-text'>Clique para ver mais detalhes</p>
                                <img className='arrow-icon' src={ArrowIcon} alt='Seta para indicar clique' />
                            </div>
                            <div className='fixed-text'>Clique para ver mais detalhes</div>
                        </div>
                        <h1>{product.name}</h1>
                        <div className='container-preco-review'>
                            <div className='preco'>
                                <span>R${product.originalPrice.toFixed(2)}</span>
                                <h1>R${product.price.toFixed(2)}</h1>
                            </div>
                            <div className='review'>
                                <img src={Review} alt="Review" />
                                <span>235 Review</span>
                            </div>
                        </div>
                        <div className='button-card'>
                            <button>
                                Peça pelo Whatsapp
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='button-container'>
                {!isShowingMore ? (
                    <button className='btn-ver-mais' onClick={showMoreProducts}>Ver Mais</button>
                ) : (
                    <button className='btn-voltar' onClick={showLessProducts}>Voltar</button>
                )}
            </div>

            {isModalOpen && selectedProduct && (
                <div className='modal'>
                    <div className='modal-content'>
                        <button className='close-modal' onClick={closeModal}>X</button>
                        <div className='modal-left'>
                            <Slider {...settings}>
                                <div>
                                    <ReactPlayer
                                        className='react-player'
                                        width='100%'
                                        height='100%'
                                        url={Video01}
                                        playing
                                        controls
                                        loop
                                        muted
                                    />
                                </div>
                                <div>
                                    <img className='img' src={Img1} alt={selectedProduct.name} />
                                </div>
                                <div>
                                    <img className='img' src={Img2} alt={selectedProduct.name} />
                                </div>
                            </Slider>
                        </div>
                        <div className='modal-right'>
                            <h1>{selectedProduct.name}</h1>
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

import React, { useState } from 'react';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
import ArrowIcon from '../Produtos/arrow.png';
import Review from '../Produtos/review.png';
import { products } from '../../data/productsData.js';

export default function Produtos(){
    const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 6));
    const [isShowingMore, setIsShowingMore] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');


    const handleButtonClick = (product) => {
        const message = `Olá, gostaria de mais informações sobre o modelo: ${product.name}.`;
        const url = `https://wa.me/5561982635975?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    const handleBuyClick = () => {
        if (selectedProduct) {
            const message = `Olá, gostaria de comprar o produto: ${selectedProduct.name} ` + 
                            `Tamanho: ${selectedSize}` + 
                            ` Cor: ${selectedColor}`;
            const url = `https://wa.me/5561982635975?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        setSelectedSize('');
        setSelectedColor('');
    };

    const showMoreProducts = () => {
        setDisplayedProducts(products);
        setIsShowingMore(true);
    };

    const showLessProducts = () => {
        setDisplayedProducts(products.slice(0, 6));
        setIsShowingMore(false);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
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
                                <span>{product.reviews} Reviews</span>
                            </div>
                        </div>
                        <div className='button-card'>
                        <button onClick={() => handleButtonClick(product)}>Peça pelo Whatsapp</button>

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
                                {selectedProduct.video && (
                                    <div>
                                        <ReactPlayer
                                            className='react-player'
                                            width='95%'
                                            height='100%'
                                            url={selectedProduct.video}
                                            playing
                                            controls
                                            loop
                                            muted
                                        />
                                    </div>
                                )}
                                <div className='img-modal'>
                                    <img className='img' src={selectedProduct.image} alt={selectedProduct.name} />
                                </div>
                            </Slider>
                        </div>
                        <div className='modal-right'>
                            <h1>{selectedProduct.name}</h1>
                            <div className='modal-select'>
                                <label htmlFor='size'>Tamanhos:</label>
                                <select id='size' value={selectedSize} onChange={handleSizeChange}>
                                    {['35/36', '37/38', '39/40', '41/42', '43/44'].map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='modal-select'>
                                <label htmlFor='color'>Cor:</label>
                                <select id='color' value={selectedColor} onChange={handleColorChange}>
                                    {['Verde', 'Branco', 'Preto', 'Marrom'].map(color => (
                                        <option key={color} value={color}>{color}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='container-button-modal'>
                                <button className='btn-comprar' onClick={handleBuyClick}>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

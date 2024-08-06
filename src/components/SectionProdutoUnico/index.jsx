// src/components/SingleProduct.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
import './style.css';
import imgAvaliacoes from './review.png';
import { products } from '../../data/productsData';

const SingleProduct = () => {
    const handleButtonClick = (product) => {
        const message = `Olá, gostaria de mais informações sobre o modelo: ${product.name}.`;
        const url = `https://wa.me/5561982635975?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    const selectedProduct = products[1]; // Seleciona o primeiro produto para exibir
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <div className='container-produto-unico'>
                <div className='container'>
                    <Slider {...settings}>
                
                            <div key={selectedProduct.id}  className='img-unico'>
                                <div key={selectedProduct.id}  className='video-wrapper'>
                                    <ReactPlayer
                                        className='react-player'
                                        url={selectedProduct.video}
                                        playing
                                        controls
                                        loop
                                        muted
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                            </div>
            
                        {selectedProduct.image && (
                            <div key={selectedProduct.id} className='img-unico'>
                                <img src={selectedProduct.image} alt={`Imagem ${selectedProduct.name}`} />
                            </div>
                        )}
                    </Slider>
                </div>
                <div className='contianer-right'>
                    <div className='container-text'>
                        <h1>{selectedProduct.name}</h1>
                        <div className='text'>
                            <div className='preco-unico'>
                                <span>R${selectedProduct.originalPrice.toFixed(2)}</span>
                                <h1>R${selectedProduct.price.toFixed(2)}</h1>
                            </div>
                            <div className='review-unico'>
                                <img src={imgAvaliacoes} alt="Review" />
                                <span>{selectedProduct.reviews} Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="button-whatsapp">
                        <button className='btn-comprar'  onClick={() => handleButtonClick(selectedProduct)}>Peça pelo WhatsApp</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;

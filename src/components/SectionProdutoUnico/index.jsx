import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
import Img1 from '../Produtos/img1.jpg';
import Video01 from '../Produtos/video02.mp4';
import './style.css';
import Review from '../Produtos/review.png';
const SingleProduct = () => {
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
                        <div className='img-unico'>
                            <div className='video-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    url={Video01}
                                    playing
                                    controls
                                    loop
                                    muted     width='100%'
                                    height='100%'
                                />
                            </div>
                        </div>
                        <div className='img-unico'>
                            <img src={Img1} alt="Produto" />
                        </div>
                        <div className='img-unico'>
                            <img src={Img1} alt="Produto" />
                        </div>
                    </Slider>
                </div>
                <div className='contianer-right'>
                    <div className='container-text'>
                        <h1>
                            Rasteirinha Feminina Marrom Estilo Casual Antiderrapante
                        </h1>
                        <div className='text'>
                           <div className='preco-unico'>
                            <span>R$60,00</span>
                                <h1>R$30,00</h1>
                           </div>
                           <div className='review-unico'>
                                <img src={Review} alt="Review" />
                                <span>235 Review</span>
                            </div>
                        </div>
                    </div>
                    <div className="button-whatsapp">
                  <button className='btn-comprar'>Peça pelo WhatsApp</button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;

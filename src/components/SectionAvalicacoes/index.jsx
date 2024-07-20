import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from './eclipse.png';
import Review from './review1.png';
import './style.css';

export default function SectionAvaliacoes() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:  1,
        centerMode: true,

    };

    return (
        <section>
            <div className="container-avaliacoes">
                <div className="title-avaliacoes">
                    <h1>AVALIAÇÕES DOS NOSSOS CLIENTES</h1>
                </div>
                <div className="container-card-review">
      
                        <div className="card-review">
                                <div className="img-card-revi ew">
                                    <img src={img} alt="Cliente" />
                                </div>
                                <div className="name-review">
                                    <h1>Sarah Lima</h1>
                                    <p>A Sandália é linda. Não escorrega. E o tamanho é certo. Acho que um tanto apertada pra quem tem pé gordinho, o que não é meu caso. Coube certinho em mim. Gostei. O vendedor é ótimo.</p>
                                </div>
                                <div className="avaliacoes">
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                </div>
                            </div>
                            <div className="card-review">
                                <div className="img-card-revi ew">
                                    <img src={img} alt="Cliente" />
                                </div>
                                <div className="name-review">
                                    <h1>Sarah Lima</h1>
                                    <p>A Sandália é linda. Não escorrega. E o tamanho é certo. Acho que um tanto apertada pra quem tem pé gordinho, o que não é meu caso. Coube certinho em mim. Gostei. O vendedor é ótimo.</p>
                                </div>
                                <div className="avaliacoes">
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                </div>
                            </div>
                            <div className="card-review">
                                <div className="img-card-revi ew">
                                    <img src={img} alt="Cliente" />
                                </div>
                                <div className="name-review">
                                    <h1>Sarah Lima</h1>
                                    <p>A Sandália é linda. Não escorrega. E o tamanho é certo. Acho que um tanto apertada pra quem tem pé gordinho, o que não é meu caso. Coube certinho em mim. Gostei. O vendedor é ótimo.</p>
                                </div>
                                <div className="avaliacoes">
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                    <img src={Review} alt="Avaliação" />
                                </div>
                            </div>
                </div>
            </div>
        </section>
    );
}

// src/components/Produto.js
import Carousel from "react-grid-carousel";
import ReactPlayer from 'react-player';
import { products } from "../data/productsData";
import imgAvaliacoes from "../img/imgAvaliacao.png";
import { useState } from "react";
import "../style/styleProduto.css";

export default function Produto() {
    const [visibleProducts, setVisibleProducts] = useState(6);

    const handleVerMais = () => {
        setVisibleProducts(visibleProducts + 6);
    };

    return (
        <>
            <div className="container-todos-produtos">
                {products.slice(0, visibleProducts).map((e) => (
                    <div key={e.id} className="container-produtos">
                        <div className="produto">
                            <div className="img-produto">
                                <Carousel cols={1} rows={1} gap={10} loop>
                                    <Carousel.Item>
                                        <img width="100%" src={e.image} alt={`Imagem de ${e.name}`} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="video">
                                            <ReactPlayer
                                                width={'100%'}
                                                height={'100%'}
                                                url={e.video}
                                                playing
                                                muted
                                                loop
                                            />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" src={e.image} alt={`Imagem de ${e.name}`} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" src={e.image2} alt={`Imagem de ${e.name}`} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="title-produto">
                                <h2>{e.nome}</h2>
                            </div>
                            <div className="container-preco-avaliacoes">
                                <div className="preco">
                                    <h1>R$ 50,00</h1>
                                    <span>R$ 70,0ss0</span>
                                </div>
                                <div className="avaliacoes">
                                    <img src={imgAvaliacoes} alt="estrela" />
                                    <p>{e.reviews} Reviews</p>
                                </div>
                            </div>
                            <div className="button-whatsapp">
                                <button>Peça pelo WhatsApp</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < products.length && (
                <div className="ver-mais-container">
                    <button onClick={handleVerMais} className="ver-mais-button">Ver Mais</button>
                </div>
            )}
        </>
    );
}

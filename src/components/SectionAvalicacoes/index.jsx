import React from "react";
import img from "./eclipse.png";
import img1 from "./perfil01.png";
import img2 from "./perfil02.png";
import Review from "./review1.png";
import "./style.css";

export default function SectionAvaliacoes() {
 
  return (
    <section className="avaliacoes">
      <div className="container-avaliacoes">
        <div className="title-avaliacoes">
          <h1>AVALIAÇÕES DOS NOSSOS CLIENTES</h1>
        </div>
        <div className="container-card-review">
          <div className="card-review">
            <div className="img-card-review">
              <img src={img} alt="Cliente" />
            </div>
            <div className="name-review">
              <h1>Maria Lima</h1>
              <p>
                É linda,macia, confortável, só que o abutuador deveria ser um
                pouco maior quase não deu pra abotoar.
              </p>
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
            <div className="img-card-review">
              <img src={img2} alt="Cliente" />
            </div>
            <div className="name-review">
              <h1>Joana</h1>
              <p>
                O vendedor está de parabéns, chegou antes do prazo. É
                linda,adorei. Voltarei comprar outras tipos de sandália
              </p>
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
            <div className="img-card-review">
              <img src={img1} alt="Cliente" />
            </div>
            <div className="name-review">
              <h1>Sarah </h1>
              <p>
                A Sandália é linda. Não escorrega. E o tamanho é certo. Acho que
                um tanto apertada pra quem tem pé gordinho, o que não é meu
                caso.
              </p>
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

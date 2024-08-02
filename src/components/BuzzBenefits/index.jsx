import Card01 from './img/card01.png';
import Card02 from './img/card02.png';
import Card03 from './img/card03.png';
import Card04 from './img/card04.png';
import './style.css'
export default function BuzzBenefits() {
    return (
        <section className='container-BuzzBenefits' id='beneficios'>
            <div className='container-title-buzzBenefits'>
                <h1>Por que Comprar na BUZZ CALÇADOS ?</h1>
            </div>
            <div className="container-buzzBenefits">
                <div className="card-fits">
                    <img src={Card01} alt="" />
                    <div className='card-fits-text'>
                        <h1>Design Exclusivo</h1>
    
                    </div>
                </div>
                <div className="card-fits">
                    <img src={Card02} alt="" />
                    <div className='card-fits-text'>
                        <h1>Conforto e Qualidade</h1>
                        <p>Oferecemos produtos de alta qualidade que priorizam o conforto, para que você possa aproveitar cada passo com segurança e bem-estar.</p>
                    </div>
                </div>
                <div className="card-fits">
                    <img src={Card03} alt="" />
                    <div className='card-fits-text'>
                        <h1>Variedade e Estilo</h1>
                        <p>Nossa coleção inclui uma ampla variedade de modelos e estilos, desde sandálias elegantes até tênis casuais, para atender a todas as suas necessidades e gostos.</p>
                    </div>
                </div>
                <div className="card-fits">
                    <img src={Card04} alt="" />
                    <div className='card-fits-text'>
                        <h1>Atendimento Personalizado</h1>
                        <p>Na BuzzCalçados, valorizamos cada cliente. Nosso atendimento é dedicado a proporcionar uma experiência de compra excepcional, com suporte especializado e soluções rápidas .</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
// src/App.js
import BannerPrincipal from './components/BannerPrincipal';
import BuzzBenefits from './components/BuzzBenefits';
import Footer from './components/Footer';
import Header from './components/header';
import SectionAvaliacoes from './components/SectionAvalicacoes';
import SectionProdutos from './components/SectionProdutos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleProduct from './components/SectionProdutoUnico';
import SectionSuporte from './components/SectionSuporte';
import './style.css';
import { useEffect } from 'react';
import { products } from './data/productsData.js';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <BannerPrincipal />
      <section id="beneficios" data-aos="fade-up">
        <BuzzBenefits />
      </section>
      <SectionProdutos />
      <section id="single-product" data-aos="fade-up">
        <SingleProduct/>
      </section>
      <section id="avaliacoes" data-aos="fade-up">
        <SectionAvaliacoes />
      </section>
      <section id="contato" data-aos="fade-up">
        <SectionSuporte />
      </section>
      <Footer />
    </>
  );
}

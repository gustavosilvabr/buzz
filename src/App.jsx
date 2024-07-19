import BannerPrincipal from './components/BannerPrincipal';
import BuzzBenefits from './components/BuzzBenefits';
import Header from './components/header';
import SectionAvaliacoes from './components/SectionAvalicacoes';
import SectionProdutos from './components/SectionProdutos';
import SingleProduct from './components/SectionProdutoUnico';
export default function App() {
  return (
    <>
      <Header/>
      <BannerPrincipal/>
      <BuzzBenefits/>
      <SectionProdutos/>
      <SingleProduct/>
      <SectionAvaliacoes/>
    </>
  )
}
import Produtos from '../Produtos';
import './style.css';
export default function SectionProdutos(){
    return(
        <section className='container-produtos' id='produtos'>
            <h1 className='title'>GRANDE VARIEDADE DE PRODUTOS</h1>
            <Produtos/>
        </section>
    )
}
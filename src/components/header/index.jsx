import Logo from './img/logo.png'
import './style.css'
export default function Header(){
    return(
        <header>
          <img src={Logo} alt="" />
          <nav>
            <ul className='lista'>
                <li>
                    <a href="">Produtos</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
                <li>
                    <a href="">Avaliação</a>
                </li>
            </ul>
          </nav>
          <div className='button-container'>
              <button>
                    Peça pelo Whatsapp
              </button>
          </div>
        </header>
    );
}
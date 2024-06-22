import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import LineBlue from '../../components/line-blue/line-blue';
import DesignCanva from '../../assets/Design sem nome (9) 1.png'
import imgFome from "../../assets/imagem fome 1.png";
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div>
      <Header />
      <LineBlue />
      <img className='img-design' src={DesignCanva} alt="imagem pessoas" />
      <div className='carrosel'>
        <div className='item'>Solidariedade</div>
        <div className='item'>Esperança</div>
        <div className='item'>Alimentos</div>
        <div className='item'>Generosidade</div>
        <div className='item'>Comprometimento</div>
        <div className='item'>Ajuda</div>
        <div className='item'>Felicidade</div>
        <div className='item'>Lealdade</div>
        <div className='item'>Amizade</div>
        <div className='item'>Amor</div>
        <div className='item'>Companherismo</div>
      </div>
      <section className='box-1'>
        <div className='container-text'>
          <h2>No Brasil, 125 milhões de pessoas vivem em
          situação de insegurança alimentar.</h2>
          <p>
            Somos uma organização que atua auxiliando pessoas em situação de insegurança alimentar através do combate ao desperdício de alimentos. Mas você sabe o que significa insegurança alimentar?</p>
          <p>
            Estado de insegurança alimentar é quando não há a garantia de que teremos o que comer na próxima refeição. Uma situação inaceitável especialmente aqui no Brasil, que bate recordes no agronegócio e desperdiçou 23,6 milhões de toneladas de alimentos em 2019.
          </p>
          <p>
            Faça sua doação e colabore com o trabalho no combate ao desperdício de alimentos.
          </p>
          <button><Link to='/doar'>Clique aqui para fazer uma doação</Link></button>        
        </div>
        <div className='container-img'>
          <img src={imgFome} alt="imagem fome"/>
        </div>
      </section>
      <section className='container-callback'>
        <div className='callback'>
          <h3>Por que doar?</h3>
          <p>Ao doar, você combate a fome e a desnutrição,
          melhorando a qualidade de vida de famílias
          vulneráveis e promovendo dignidade
          e bem-estar em nossa comunidade.</p>
        </div>
        <div className='callback'>
          <h3>Como minha doação é utilizada?</h3>
          <p>Sua doação é usada para comprar e distribuir alimentos
          a famílias carentes, garantindo que cada contribuição 
          seja utilizada de forma eficaz e chegue diretamente
          às mãos das pessoas que mais precisam.</p>
        </div>
        <div className='callback'>
          <h3>O que doar?</h3>
          <p>Aceitamos alimentos não perecíveis como arroz, feijão,
          macarrão, óleo e enlatados. Contribuições 
          financeiras também são essenciais para manter nossas operações.</p>
        </div>
      </section>
      <LineBlue />
      <Footer />
    </div>
  )
}

export default Home;

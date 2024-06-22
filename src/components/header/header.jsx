import './header.css'; // Importe o arquivo de estilos CSS
import logo from '../../assets/Mãos_Solidarias-removebg-preview 1.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='img-logo'>
        <img src={logo} alt='logo' />
      </div>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/contato" activeClassName="active">Contato</NavLink></li>
          <li><NavLink to="/receber-ajuda" activeClassName="active">Receber Ajuda</NavLink></li>
          <li><NavLink to="/doar" activeClassName="active">Doar</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
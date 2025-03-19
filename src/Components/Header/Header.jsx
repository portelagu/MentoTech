import './Header.css'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div>
            <header className='header-section'>
                <div className='header-elements'>
            <img src={Logo} alt="logomarca da plataforma. Ante do nome MentoTech, há um simbolo de lâmpada, para simbolizar inovação e ideias." />
            <ul className='header-items-list'>
                <li><Link to="/"className='header-item-link'>Home</Link></li>
                <li><Link to="/mentores" className='header-item-link'>Mentores</Link></li>
                <li><Link to="/fale-conosco" className='header-item-link'>Contato</Link></li>
            </ul>
            <a className='start-now-button' href='#'>Começar Agora</a>
                </div>
            </header>
        </div>
    )
}

export default Header;
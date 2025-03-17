import './Header.css'
import Logo from '../../assets/Logo.svg'

function Header(){
    return(
        <div>
            <header className='header-section'>
                <div className='header-elements'>
            <img src={Logo} alt="logomarca da plataforma. Ante do nome MentoTech, há um simbolo de lâmpada, para simbolizar inovação e ideias." />
            <ul className='header-items-list'>
                <li><a href="#" className='header-item-link'>Home</a></li>
                <li><a href="#" className='header-item-link'>Mentores</a></li>
                <li><a href="#" className='header-item-link'>Contato</a></li>
            </ul>
            <a className='start-now-button' href='#'>Começar Agora</a>
                </div>
            </header>
        </div>
    )
}

export default Header;
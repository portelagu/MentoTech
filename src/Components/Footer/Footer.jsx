import './Footer.css'
import logo from '../../assets/Logo.svg'

function Footer(){
    return(
        <>
        <footer className='footer-section'>
            <img src={logo} alt="logomarca da mentotech" className='footer-image'/>
            <p className="footer-text">© Projeto acadêmico por Gustavo Portela. 2025.</p>
        </footer>
        </>
    )
}

export default Footer;
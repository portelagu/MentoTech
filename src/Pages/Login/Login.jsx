import './Login.css'
import loginImage from '../../assets/login.svg'
import { Link } from 'react-router-dom';
import emailIcon from '../../assets/mailsignin.svg'
import passwordIcon from '../../assets/passwordsignin.svg'


function Login(){
    return(
        <>
        <section className="sign-in-section">
    
            <aside className="signin-form-section">

                <div className="signin-form-description">
                    <h1 className="signin-form-title">Olá, de novo!</h1>
                    <p className="signin-form-subtitle">Bem-vindo novamente</p>
                </div>
                
                <form action="#" className="signin-form">
                

                    <div className='signin-form-input-div'>
                    <img src={emailIcon} alt="ícone de e-mail" className="signin-form-icon" />
                    <input type="text" className="signin-form-element" placeholder='Digite o seu e-mail'/>
                    </div>

                    <div className='signin-form-input-div'>
                    <img src={passwordIcon} alt="ícone de senha" className="signin-form-icon" />
                    <input type="text" className="signin-form-element" placeholder='Digite a senha'/>
                    </div>

                    <div className='signin-form-input-submit-div'>
                        <input type="submit" className="sign-in-form-submit" value="Entrar"/>
                    </div>

                        <p className="signin-form-login-option">Usuário novo? <Link to="/cadastro" className='signin-form-login-link'>Cadastre-se aqui</Link></p>
                </form>
            </aside>
            <div className='signin-image-div'><img src={loginImage} alt="ilustração de uma pessoa logando em um sistema" className='signin-image'/></div>
        </section>
        </>
    )
}

export default Login;
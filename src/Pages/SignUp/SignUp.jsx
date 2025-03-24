import './SignUp.css'
import signupImage from '../../assets/signupicon.svg'
import userIcon from '../../assets/usericon.svg'
import emailIcon1 from '../../assets/mailicon.svg' 
import emailIcon2 from '../../assets/mail2icon.svg'
import passwordIcon from '../../assets/password.svg'
import { Link } from 'react-router-dom'

function SignUp(){
    return(
        <>
        <section className="sign-up-section">
            <div className='signup-image-div'><img src={signupImage} alt="ilustração de uma pessoa se cadastrando" className='signup-image'/></div>
            <aside className="signup-form-section">

                <div className="signup-form-description">
                    <h1 className="signup-form-title">Bem-Vindo!</h1>
                    <p className="signup-form-subtitle">Estamos felizes em te ver</p>
                </div>
                
                <form action="#" className="signup-form">
                    <div className='signup-form-input-div'>
                    <img src={userIcon} alt="ícone de usuário" className="signup-form-icon" />
                    <input type="text" className="signup-form-element" placeholder='Digite o seu nome completo'/>
                    </div>

                    <div className='signup-form-input-div'>
                    <img src={emailIcon1} alt="ícone de e-mail" className="signup-form-icon" />
                    <input type="text" className="signup-form-element" placeholder='Escolha um nome de usuário'/>
                    </div>

                    <div className='signup-form-input-div'>
                    <img src={emailIcon2} alt="ícone de e-mail" className="signup-form-icon" />
                    <input type="text" className="signup-form-element" placeholder='Digite o seu e-mail'/>
                    </div>

                    <div className='signup-form-input-div'>
                    <img src={passwordIcon} alt="ícone de senha" className="signup-form-icon" />
                    <input type="text" className="signup-form-element" placeholder='Digite a senha'/>
                    </div>

                    <div className='signup-form-input-div'>
                    <img src={passwordIcon} alt="ícone de senha" className="signup-form-icon" />
                    <input type="text" className="signup-form-element" placeholder='Digite a senha novamente'/>
                    </div>



                    <div className='signup-form-input-radio-div'>
                        <div className="signup-form-input-radio">
                            <input type="radio" name='tipo-conta' className='signup-form-input-radio-type'/>
                            <label className='signup-form-input-radio-label'>Sou Mentor</label>
                        </div>

                        <div className="signup-form-input-radio">
                            <input type="radio" name='tipo-conta' className='signup-form-input-radio-type'/>
                            <label className='signup-form-input-radio-label'>Sou Mentorado</label>
                        </div>
                    </div>




                    <div className='signup-form-input-submit-div'>
                        <input type="submit" className="sign-up-form-submit" value="Realizar Cadastro"/>
                    </div>

                        <p className="signup-form-login-option">Já possui conta? <Link to="/login" className='signup-form-login-link'>Entre aqui</Link></p>
                </form>
            </aside>
        </section>
        </>
    )
}

export default SignUp;
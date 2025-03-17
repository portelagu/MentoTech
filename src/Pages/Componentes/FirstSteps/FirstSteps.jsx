import './FirstSteps.css'
import cadastroIcon from '../../../assets/cadastroIcon.svg'
import preferenciasIcon from '../../../assets/preferenciasIcon.svg'
import buscaIcon from '../../../assets/buscaIcon.svg'

function FirstSteps(){
    return( 
        <>
        <div className="first-steps-background">
            <main className="first-steps-main-section">
                <div className="first-steps-main-title-subtitle">
                    <h1 className="first-steps-main-title">Primeiros Passos</h1>
                    <p className="first-steps-main-subtitle">O que devo fazer?</p>
                </div>

                <section className="first-steps-section">
                    <div className="first-steps-section-element">
                        <img src={cadastroIcon} alt="ícone de cadastro" className="first-steps-section-element-image"/>
                        <h1 className="first-steps-section-element-title">Se Cadastrar</h1>
                        <p className="first-steps-section-element-text">Realize o seu cadastro <br></br>na nossa plataforma</p>
                    </div>

                    <div className="first-steps-section-element">
                        <img src={preferenciasIcon} alt="ícone de preferências" className="first-steps-section-element-image"/>
                        <h1 className="first-steps-section-element-title">Personalizar</h1>
                        <p className="first-steps-section-element-text">Personalize o perfil com <br></br>base nos seus objetivos</p>
                    </div>

                    <div className="first-steps-section-element">
                        <img src={buscaIcon} alt="ícone de busca" className="first-steps-section-element-image"/>
                        <h1 className="first-steps-section-element-title">Buscar Perfil</h1>
                        <p className="first-steps-section-element-text">Busque um mentor ou mentorado<br></br> de acordo com seu perfil </p>
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}

export default FirstSteps;
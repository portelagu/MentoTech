import './MentoriaInfo.css'
import mentorVetor from '../../../assets/mentorVetor.svg'
import mentoradoVetor from '../../../assets/mentoradoVetor.svg'

function MentoriaInfo(){
    return (
        <>
        <main className="mentoria-info-main-section">
            <p className="mentoria-info-main-section-desc">Nosso <b className='mentoria-info-main-section-desc-highlight '>propósito</b> é conectar talentos a mentores, oferecendo suporte e orientação para o seu <b className='mentoria-info-main-section-desc-highlight '>crescimento</b> </p>

            <section className="mentoria-info-mentor-section">
            <div className="mentoria-info-mentor-informations">
                    <h1 className="mentoria-info-mentor-title">O MENTOR</h1>
                    <p className="mentoria-info-mentor-text">Profissional experiente que compartilha conhecimento, orienta e inspira, ajudando no desenvolvimento de carreira.</p>
                    <a className="mentoria-info-mentor-button" href='#'>Quero ser mentor</a>
                </div>
                <img src={mentorVetor} alt="ilustração de um mentor" className='mentoria-info-mentor-image'/>
            </section>

            <section className="mentoria-info-mentorado-section">
            <img src={mentoradoVetor} alt="ilustração de um mentorado" className='mentoria-info-mentorado-image'/>
            <div className="mentoria-info-mentorado-informations">
                    <h1 className="mentoria-info-mentorado-title">O MENTORADO</h1>
                    <p className="mentoria-info-mentorado-text">Pessoa em busca de aprendizado e crescimento, recebendo suporte e insights para evoluir na tecnologia.</p>
                    <a className="mentoria-info-mentorado-button" href='#'>Quero ser mentorado</a>
                </div>
                
            </section>
        </main>
        </>
    )
}

export default MentoriaInfo;
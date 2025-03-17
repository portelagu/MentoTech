import './AboutUs.css'
import mentotechMockup from '../../../assets/mentotechmockup.svg'

function AboutUs(){
    return(
        <>
        <section className="about-us-section">
            <img src={mentotechMockup} alt="" className="about-us-image" />
            <div className='about-us-informations'>
                <h1 className='about-us-title'>Quem somos?</h1>
                <p className='about-us-text'>A MentoTech nasceu para conectar talentos a mentores experientes do mercado de tecnologia.<br></br><br></br>Nossa missão é guiar você na sua jornada profissional, oferecendo insights, aprendizado prático e suporte para acelerar sua evolução. <br></br><br></br>Através de mentorias gratuitas, você encontrará conhecimento real, de quem já esteve no seu lugar e quer te ajudar a chegar mais longe.</p>
            </div>
        </section>
        </>
    )
}

export default AboutUs;
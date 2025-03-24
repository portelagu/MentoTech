import './ActionBanner.css'
import { Link } from 'react-router-dom';

function ActionBanner(){
    return (
        <>
        <section className="action-banner-section">
            <h1 className="action-banner-text">❝Aprenda com quem faz. Cresça com quem inspira.❞</h1>
            <Link to="/cadastro" className="action-banner-button">Comece Agora</Link>
        </section>
        </>
    )
}

export default ActionBanner;
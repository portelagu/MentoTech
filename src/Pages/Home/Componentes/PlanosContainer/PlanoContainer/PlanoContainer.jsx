import './PlanoContainer.css'
import verifiedIcon from '../../../../../assets/verifiedicon.svg'
import { Link } from 'react-router-dom';

function PlanoContainer(props){
    return(
        <>
        <section className="plano-container-section">
            <h1 className="plano-container-title">{props.title}</h1>

            <div className="plano-container-benefits">
                <img src={props.icon} alt="icone"/>
                <p className="plano-container-benefit-desc">{props.benefit1}</p>
            </div>
            <div className="plano-container-benefits">
                <img src={verifiedIcon} alt="icone"/>
                <p className="plano-container-benefit-desc">{props.benefit2}</p>
            </div>
            <div className="plano-container-benefits">
                <img src={verifiedIcon} alt="icone"/>
                <p className="plano-container-benefit-desc">{props.benefit3}</p>
            </div>

            <p className="plano-container-price">R${props.price}</p>
            <p className="plano-container-typeofsubscription">Plano Mensal</p>
            <Link className="plano-container-button" to="/pagamento">ASSINAR AGORA</Link>

        </section>
        </>
    )
}

export default PlanoContainer;
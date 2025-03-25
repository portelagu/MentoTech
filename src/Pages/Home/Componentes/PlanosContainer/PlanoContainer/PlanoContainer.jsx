import './PlanoContainer.css'
import verifiedIcon from '../../../../../assets/verifiedicon.svg'
import plusIcon from '../../../../../assets/plusicon.svg'

function PlanoContainer(props){
    return(
        <>
        <section className="plano-container-section">
            <h1 className="plano-container-title">{props.title}</h1>

            <div className="plano-container-benefits">
                <img src={props.icon}/>
                <p className="plano-container-benefit-desc">{props.benefit1}</p>
            </div>
            <div className="plano-container-benefits">
                <img src={verifiedIcon}/>
                <p className="plano-container-benefit-desc">{props.benefit2}</p>
            </div>
            <div className="plano-container-benefits">
                <img src={verifiedIcon}/>
                <p className="plano-container-benefit-desc">{props.benefit3}</p>
            </div>

            <p className="plano-container-price">R${props.price}</p>
            <p className="plano-container-typeofsubscription">Plano Mensal</p>
            <p className="plano-container-button">ASSINAR AGORA</p>

        </section>
        </>
    )
}

export default PlanoContainer;
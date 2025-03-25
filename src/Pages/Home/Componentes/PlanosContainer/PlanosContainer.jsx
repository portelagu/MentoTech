import './PlanosContainer.css'
import { Link } from 'react-router-dom';
import PlanoContainer from './PlanoContainer/PlanoContainer';
import verifiedIcon from '../../../../assets/verifiedicon.svg'
import plusIcon from '../../../../assets/plusicon.svg'

function PlanosContainer(){
    return(
        <>
        <main className="planoscontainer-main-section">
            <div className="planoscontainer-section-header">
                <h1 className="planoscontainer-title">Se torne um apoiador</h1>
                <p className="planoscontainer-subtitle">Apoie a MentoTech a continuar de pé</p>
            </div>

            <div className="planoscontainer-section-div">
            <PlanoContainer 
            title="Plano Básico"
            icon={verifiedIcon}
            benefit1="Fórum de comunidade"
            benefit2="Material de apoio"
            benefit3="Certificado de mentorias"
            price="9,99"
            />

            <PlanoContainer 
            title="Plano Silver"
            icon={plusIcon}
            benefit1="Benefícios do plano Básico"
            benefit2="Prioridade no agendamento"
            benefit3="Gravação das mentorias"
            price="19,99"
            />

            <PlanoContainer 
            title="Plano Gold"
            icon={plusIcon}
            benefit1="Benefícios do plano Silver"
            benefit2="Workshops e Masterclasses"
            benefit3="Insígnia especial no perfil"
            price="29,99"
            />
            </div>
        </main>
        </>
    )
}

export default PlanosContainer;
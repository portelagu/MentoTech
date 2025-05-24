import './FaleConosco.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import FaleConoscoTitle from './Componentes/FaleConoscoTitle/FaleConoscoTitle';
import FaleConoscoForm from './Componentes/FaleConoscoForm/FaleConoscoForm';

function FaleConosco(){
    return (
        <>
        <Header/>
        <FaleConoscoTitle/>
        <FaleConoscoForm/>
        <Footer/>
        </>
    )
}

export default FaleConosco;
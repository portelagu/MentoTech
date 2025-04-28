import './Pagamento.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import PagamentoTitle from './Componentes/PagamentoTitle/PagamentoTitle';
import PagamentoForm from './Componentes/PagamentoForm/PagamentoForm';
import { useEffect } from 'react';

function Pagamento(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
        <Header/>
        <PagamentoTitle/>
        <PagamentoForm/>
        <Footer/>
        </>
    )
}

export default Pagamento;
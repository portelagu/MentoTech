import './PagamentoForm.css'
import personPaymentImage from '../../../../assets/personpayment.svg'
import cardIcon from '../../../../assets/creditcardicon.svg'
import React, { useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

function PagamentoForm(){

    const numCardRef = useRef(null);
    const cpfRef = useRef(null);
    const nomeRef = useRef(null);
    const cvvRef = useRef(null);
    const dateRef = useRef(null);


    useEffect(() => {
        const formatCPF = (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 3 && value.length <= 6) {
                value = value.replace(/(\d{3})(\d+)/, '$1.$2');
            } else if (value.length > 6 && value.length <= 9) {
                value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
            } else if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
            }
            e.target.value = value;
        };

        const cpfInput = cpfRef.current;
        cpfInput.addEventListener('input', formatCPF);

        return () => {
            cpfInput.removeEventListener('input', formatCPF);
        };
    }, []);
    

    
    const formatNumCard = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4 && value.length <= 8) {
            value = value.replace(/(\d{4})(\d+)/, '$1 $2');
        } else if (value.length > 8 && value.length <= 12) {
            value = value.replace(/(\d{4})(\d{4})(\d+)/, '$1 $2 $3');
        } else if (value.length > 12) {
            value = value.replace(/(\d{4})(\d{4})(\d{4})(\d+)/, '$1 $2 $3 $4');
        }
        e.target.value = value;
    };

    const formatName = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    };

    const onlyNumbers = (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    };

    const formatDate = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.replace(/(\d{2})(\d+)/, '$1/$2'); 
        }
        e.target.value = value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let timerInterval;
Swal.fire({
  title: "Pagamento em processo",
  html: "Aguarde enquanto verificamos os dados...",
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {

  if (result.dismiss === Swal.DismissReason.timer) {
    Swal.fire({
        title: "Pagamento efetuado!",
        text: "Agradecemos a sua assinatura. Não se esqueça de verificar o seu e-mail para futuras atualizações.",
        icon: "success"
    }).then(() => {
        e.target.reset(); 
    });

  }
});
        
    };

    return(
        <>
        <main className="pagamentoform-main-section">
            <img src={personPaymentImage} alt="ilustração de uma pessoa utilizando cartão de crédito" className='pagamentoform-image'/>
            
            <form className="pagamentoform-form-section" onSubmit={handleSubmit}>

                <div className="pagamentform-form-div">
                    <label className='pagamentform-form-label'>Selecione o tipo de cartão</label>

                    <div className='pagamentform-form-radio-div'>

                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-cartão" required />
                    <img src={cardIcon} alt="ícone de um cartão de crédito" />
                    <label className="pagamentform-form-radio-label">Crédito</label>
                    </div>

                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-cartão" required/>
                    <img src={cardIcon} alt="ícone de um cartão de crédito" />
                    <label className="pagamentform-form-radio-label">Débito</label>
                    </div>

                    </div>
                </div>

                <div className="pagamentform-form-div">
                <label className='pagamentform-form-label'>Nome completo</label>
                <input type="text" className="pagamentform-form-input" placeholder="Escreva como consta no cartão" ref={nomeRef} onInput={formatName} required />
                </div>

                <div className="pagamentform-form-div">
                <label className='pagamentform-form-label'>CPF</label>
                <input type="text" className="pagamentform-form-input" placeholder="XXX.XXX.XXX-XX" ref={cpfRef} minLength="14" maxLength="14" required />
                </div>

                <div className="pagamentform-form-div">
                <label className='pagamentform-form-label'>Número do cartão</label>
                <input type="text" className="pagamentform-form-input" placeholder="XXXX - XXXX - XXXX - XXXX" onInput={formatNumCard} ref={numCardRef} maxLength="19" minLength="19" required />
                </div>

                <div className="pagamentform-form-div-cvv-date">
                    <div className="pagamentform-form-div-date">
                    <label className='pagamentform-form-label'>CVV</label>
                    <input type="text" className="pagamentform-form-input-cvv" placeholder="XXX" required minLength="3" maxLength="3" onInput={onlyNumbers} ref={cvvRef}/>
                    </div>

                    <div className="pagamentform-form-div-date">
                    <label className='pagamentform-form-label'> Data de vencimento</label>
                    <input type="text" className="pagamentform-form-input-date" placeholder="MM/AA" required onInput={formatDate} ref={dateRef} maxLength="5"/> 
                    </div>
                </div>

                <div className="pagamentform-form-div">
                <label className='pagamentform-form-label'>E-mail</label>
                <input type="email" className="pagamentform-form-input" placeholder="Digite o e-mail cadastrado na MentoTech " required />
                </div>

                <div className="pagamentform-form-div-plan">
                    <label className='pagamentform-form-label'>Tipo de plano</label>

                    <div className='pagamentform-form-radio-div'>
                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-plano" required/>
                    <label className="pagamentform-form-radio-plan">Básico</label>
                    </div>

                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-plano" required/>
                    <label className="pagamentform-form-radio-plan">Silver</label>
                    </div>

                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-plano" required/>
                    <label className="pagamentform-form-radio-plan">Gold</label>
                    </div>

                    </div>
                </div>

                <input type="submit" className="pagamentoform-submit-button" value="Realizar Pagamento"/>

            </form>
        </main>
        </>
    )
}

export default PagamentoForm;
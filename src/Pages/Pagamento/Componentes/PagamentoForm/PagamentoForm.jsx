import './PagamentoForm.css'
import personPaymentImage from '../../../../assets/personpayment.svg'
import cardIcon from '../../../../assets/creditcardicon.svg'

function PagamentoForm(){
    return(
        <>
        <main className="pagamentoform-main-section">
            <img src={personPaymentImage} alt="ilustração de uma pessoa utilizando cartão de crédito" className='pagamentoform-image'/>
            
            <form className="pagamentoform-form-section">

                <div className="pagamentform-form-div">
                    <label className='pagamentform-form-label'>Selecione o tipo de cartão</label>

                    <div className='pagamentform-form-radio-div'>

                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-cartão"/>
                    <img src={cardIcon} alt="ícone de um cartão de crédito" />
                    <label className="pagamentform-form-radio-label">Crédito</label>
                    </div>

                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-cartão"/>
                    <img src={cardIcon} alt="ícone de um cartão de crédito" />
                    <label className="pagamentform-form-radio-label">Débito</label>
                    </div>

                    </div>
                </div>

                <div className="pagamentform-form-div">
                <label className='pagamentform-form-label'>Nome completo</label>
                <input type="text" className="pagamentform-form-input" placeholder="Escreva como consta no cartão" />
                </div>

                <div className="pagamentform-form-div">
                <label className='pagamentform-form-label'>CPF</label>
                <input type="text" className="pagamentform-form-input" placeholder="XXX.XXX.XXX-XX" />
                </div>

                <div className="pagamentform-form-div">
                <label className='pagamentform-form-label'>Número do cartão</label>
                <input type="text" className="pagamentform-form-input" placeholder="XXXX - XXXX - XXXX - XXXX" />
                </div>

                <div className="pagamentform-form-div-cvv-date">
                    <div className="pagamentform-form-div-date">
                    <label className='pagamentform-form-label'>CVV</label>
                    <input type="text" className="pagamentform-form-input-cvv" placeholder="XXX" />
                    </div>

                    <div className="pagamentform-form-div-date">
                    <label className='pagamentform-form-label'> Data de vencimento</label>
                    <input type="text" className="pagamentform-form-input-date" placeholder="MM/AA" />
                    </div>
                </div>

                <div className="pagamentform-form-div">
                <label className='pagamentform-form-label'>E-mail</label>
                <input type="email" className="pagamentform-form-input" placeholder="Digite o e-mail cadastrado na MentoTech " />
                </div>

                <div className="pagamentform-form-div-plan">
                    <label className='pagamentform-form-label'>Tipo de plano</label>

                    <div className='pagamentform-form-radio-div'>
                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-plano"/>
                    <label className="pagamentform-form-radio-plan">Básico</label>
                    </div>

                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-plano"/>
                    <label className="pagamentform-form-radio-plan">Silver</label>
                    </div>

                    <div className="pagamentform-form-radio-input-div">
                    <input type="radio" name="tipo-plano"/>
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
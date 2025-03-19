import './FaleConoscoForm.css'
import imagem from '../../../../assets/faleconoscovector.svg'

function FaleConoscoForm(){
    return (
        <>
        <main className="fale-conosco-form-section">
            <img src={imagem} alt="ilustração de duas pessoas conversando virtualmente" className="fale-conosco-form-img" />
            <section className="fale-conosco-form">
                <form action="#">
                    <div className="fale-conosco-form-container">
                        <label className="fale-conosco-label">Nome Completo</label>
                        <input type="text" className="fale-conosco-input" placeholder='Digite o seu nome completo...'/>
                    </div>

                    <div className="fale-conosco-form-container">
                        <label className="fale-conosco-label">E-mail</label>
                        <input type="text" className="fale-conosco-input" placeholder='Digite um e-mail de contato'/>
                    </div>

                    <div className="fale-conosco-form-container">
                        <label className="fale-conosco-label">Assunto</label>
                        <input type="text" className="fale-conosco-input" placeholder='Qual o motivo do contato?'/>
                    </div>

                    <div className="fale-conosco-form-container">
                        <label className="fale-conosco-label">Mensagem</label>
                        <textarea name="mensagem" id="mensagem" className="fale-conosco-input-textarea" placeholder='Escreva sobre o assunto de forma detalhada...'></textarea>
                    </div>

                    <input type="submit" value="Enviar" className='fale-conosco-input-submit'/>
                
                </form>
            </section>
        </main>
        </>
    )
}

export default FaleConoscoForm;
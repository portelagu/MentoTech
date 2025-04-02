import './FaleConoscoForm.css'
import imagem from '../../../../assets/faleconoscovector.svg'
import Swal from 'sweetalert2';
import React, { useRef, useEffect } from 'react';


function FaleConoscoForm(){

    const nomeRef = useRef(null);

    const formatName = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let timerInterval;
Swal.fire({
        title: "Mensagem enviada!",
        text: "Agradecemos a sua mensagem. Te retornaremos o mais rápido possível.",
        icon: "success"
    }).then(() => {
        e.target.reset(); 
    });
}


    return (
        <>
        <main className="fale-conosco-form-section">
            <img src={imagem} alt="ilustração de duas pessoas conversando virtualmente" className="fale-conosco-form-img" />
            <section className="fale-conosco-form">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="fale-conosco-form-container">
                        <label className="fale-conosco-label">Nome Completo</label>
                        <input type="text" className="fale-conosco-input" placeholder='Digite o seu nome completo...' ref={nomeRef} onInput={formatName} required/>
                    </div>

                    <div className="fale-conosco-form-container">
                        <label className="fale-conosco-label">E-mail</label>
                        <input type="email" className="fale-conosco-input" placeholder='Digite um e-mail de contato' required/>
                    </div>

                    <div className="fale-conosco-form-container">
                        <label className="fale-conosco-label">Assunto</label>
                        <input type="text" className="fale-conosco-input" placeholder='Qual o motivo do contato?' required/>
                    </div>

                    <div className="fale-conosco-form-container">
                        <label className="fale-conosco-label">Mensagem</label>
                        <textarea name="mensagem" id="mensagem" className="fale-conosco-input-textarea" placeholder='Escreva sobre o assunto de forma detalhada...' required></textarea>
                    </div>

                    <input type="submit" value="Enviar" className='fale-conosco-input-submit'/>
                
                </form>
            </section>
        </main>
        </>
    )
}

export default FaleConoscoForm;
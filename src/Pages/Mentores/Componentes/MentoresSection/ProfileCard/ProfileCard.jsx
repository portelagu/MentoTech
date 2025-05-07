import React from 'react';
import './ProfileCard.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function ProfileCard(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Permissão Negada",
            text: "Epa! Antes de entrar em contato com um(a) mentor(a), é preciso acessar sua conta",
            confirmButtonColor: "#1B4965",
            footer: `<a href="/login"> <i>Entrar na minha conta<i/><a/>`
            
        });
    }

    return (
      <div className="card-wrapper">
        <div className="card-container">
            <img
                src={props.imagem}
                alt="imagem de perfil"
                className="profile-image"
            />
            <div className="card-content">
                <h2 className="profile-name">{props.nome}</h2>
                <p className="profile-role">{props.role}</p>

                <p className="section-title">Dias e horários de atendimento</p>

                <div className="days-container">
                  {props.dias.map((dia, index) => (
                    <div key={index} className="day-wrapper">
                      <span
                        className={`day-box ${dia.ativo ? 'ativo' : 'inativo'}`}
                      >
                        {dia.label}
                        {dia.ativo && (
                          <span className="tooltip">
                            {dia.horarios?.join(', ') || 'Horários não definidos'}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>


                <p className="section-title">Área(s) de especialidade</p>
                <div className="tags-container">
                    <span className="tag">{props.especialidade}</span>
                    <span className="tag">{props.especialidade2}</span>
                    <span className="tag">{props.especialidade3}</span>
                </div>

                <p className="contact-text">Gostou do perfil? Entre em contato</p>
                <button className="contact-button" onClick={handleSubmit}>Solicitar contato</button>
            </div>
        </div>
      </div>
    );
}

export default ProfileCard;
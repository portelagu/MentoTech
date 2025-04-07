import React from 'react';
import './ProfileCard.css';
import luisaImagem from '../../../../../assets/luisaImagem.png'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function ProfileCard(props){

    const handleSubmit = (e) => {
        e.preventDefault();
        let timerInterval;
        Swal.fire({
            icon: "error",
            title: "Eita...",
            text: "Você precisa estar logado para entrar em contato com um mentor!",
          });
    }

      
  return (
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
            <span
              key={index}
              className={`day-box ${dia.ativo ? 'ativo' : 'inativo'}`}
            >
              {dia.label}
            </span>
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
  );
};

export default ProfileCard;

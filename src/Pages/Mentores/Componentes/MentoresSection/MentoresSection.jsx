import './MentoresSection.css';
import { useState } from 'react';
import SearchIcon from '../../../../assets/searchIcon.svg';
import luisaImagem from '../../../../assets/luisaImagem.png';
import marianaImagem from '../../../../assets/marianaimagem.png';
import henriqueImagem from '../../../../assets/henriqueimagem.png';
import carolImagem from '../../../../assets/carolimagem.png';
import miguelImagem from '../../../../assets/miguelImagem.png';
import michelleImagem from '../../../../assets/michelleimagem.png';
import andressaImagem from '../../../../assets/andressaimagem.png';
import sophiaImagem from '../../../../assets/sophiaimagem.png';
import ProfileCard from './ProfileCard/ProfileCard';

function MentoresSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const mentores = [
    {
      imagem: luisaImagem,
      nome: 'Luísa Bastos',
      role: 'Tech Recruiter',
      especialidade: 'Carreira',
      especialidade2: 'Currículo',
      especialidade3: 'Gestão',
      dias: [
        { label: 'D', ativo: true, horarios: ['09:00 - 11:00'] },
        { label: 'S', ativo: false },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: true, horarios: ['07:30 - 09:00']  },
        { label: 'Q', ativo: true, horarios: ['10:00 - 11:30']  },
        { label: 'S', ativo: false },
        { label: 'S', ativo: true, horarios: ['20:00 - 20:30']  },
      ],
    },
    {
      imagem: marianaImagem,
      nome: 'Mariana Pazzoli',
      role: 'Empreendedora em T.I',
      especialidade: 'Carreira',
      especialidade2: 'Comercial',
      especialidade3: 'Tech',
      dias: [
        { label: 'D', ativo: false },
        { label: 'S', ativo: false },
        { label: 'T', ativo: true, horarios: ['10:00 - 11:30', '21:00 - 22:00'] },
        { label: 'Q', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: false },
        { label: 'S', ativo: false },
      ],
    },
    {
      imagem: henriqueImagem,
      nome: 'Henrique Oliveira',
      role: 'Arquiteto de Soluções',
      especialidade: 'Carreira',
      especialidade2: 'Cloud',
      especialidade3: 'Tech',
      dias: [
        { label: 'D', ativo: false },
        { label: 'S', ativo: true, horarios: ['20:00 - 20:30'] },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: true, horarios: ['07:00 - 07:50', '19:00 - 20:30']},
        { label: 'S', ativo: true,horarios: ['09:00 - 10:00'] },
      ],
    },
    {
      imagem: carolImagem,
      nome: 'Carol Fernandes',
      role: 'Project Manager',
      especialidade: 'Projetos',
      especialidade2: 'Gestão',
      especialidade3: 'Tech',
      dias: [
        { label: 'D', ativo: true,horarios: ['09:00 - 10:30'] },
        { label: 'S', ativo: true,horarios: ['20:00 - 20:50'] },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: true },
        { label: 'S', ativo: false },
      ],
    },
    {
      imagem: miguelImagem,
      nome: 'Miguel Santiago',
      role: 'Engenheiro de Software Sr',
      especialidade: 'Engenharia',
      especialidade2: 'Cloud',
      especialidade3: 'Tech',
      dias: [
        { label: 'D', ativo: false },
        { label: 'S', ativo: false },
        { label: 'T', ativo: true,horarios: ['10:30 - 12:00']},
        { label: 'Q', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: false },
        { label: 'S', ativo: false },
      ],
    },
    {
      imagem: michelleImagem,
      nome: 'Michelle Yoshida',
      role: 'Diretora de Arquitetura Cloud',
      especialidade: 'Cloud',
      especialidade2: 'Liderança',
      especialidade3: 'Tech',
      dias: [
        { label: 'D', ativo: false},
        { label: 'S', ativo: true,horarios: ['09:00 - 10:00'] },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: true,horarios: ['15:00 - 16:00'] },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: true,horarios: ['18:50 - 19:50'] },
        { label: 'S', ativo: false },
      ],
    },
    {
      imagem: andressaImagem,
      nome: 'Andressa Panzo',
      role: 'UI/UX Designer',
      especialidade: 'Carreira',
      especialidade2: 'Tech',
      especialidade3: 'UI/UX',
      dias: [
        { label: 'D', ativo: true,horarios: ['11:10 - 12:10'] },
        { label: 'S', ativo: false },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: true,horarios: ['08:00 - 09:00'] },
        { label: 'Q', ativo: true,horarios: ['18:00 - 19:00'] },
        { label: 'S', ativo: false },
        { label: 'S', ativo: false },
      ],
    },
    {
      imagem: sophiaImagem,
      nome: 'Sophia Allenccino',
      role: 'Analista de Sistemas',
      especialidade: 'Carreira',
      especialidade2: 'Tech',
      especialidade3: 'Currículo',
      dias: [
        { label: 'D', ativo: false },
        { label: 'S', ativo: false },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: false },
        { label: 'S', ativo: true,horarios: ['19:00 - 21:30'] },
      ],
    },
  ];

  const mentoresFiltrados = mentores.filter((mentor) => {
    const texto = searchTerm.toLowerCase();
    return (
      mentor.nome.toLowerCase().includes(texto) ||
      mentor.role.toLowerCase().includes(texto) ||
      mentor.especialidade.toLowerCase().includes(texto) ||
      mentor.especialidade2.toLowerCase().includes(texto) ||
      mentor.especialidade3.toLowerCase().includes(texto)
    );
  });

  return (
    <>
      <section className="mentores-searchbar-section">
        <form action="#" className="mentores-searchbar-form">
          <img src={SearchIcon} alt="ícone de lupa" className="mentores-searchbar-image" />
          <input
            type="text"
            name="search"
            placeholder="Pesquisar mentores específicos por área de especialidade..."
            className="mentores-searchbar-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </section>

      <main className="mentores-main-section">
        <section className="mentores-profile-section">
          {mentoresFiltrados.map((mentor, index) => (
            <ProfileCard
              key={index}
              imagem={mentor.imagem}
              nome={mentor.nome}
              role={mentor.role}
              especialidade={mentor.especialidade}
              especialidade2={mentor.especialidade2}
              especialidade3={mentor.especialidade3}
              dias={mentor.dias}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default MentoresSection;

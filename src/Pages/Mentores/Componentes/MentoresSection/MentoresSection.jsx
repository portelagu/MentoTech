import './MentoresSection.css'
import SearchIcon from '../../../../assets/searchIcon.svg'
import luisaImagem from '../../../../assets/luisaImagem.png'
import marianaImagem from '../../../../assets/marianaimagem.png'
import henriqueImagem from '../../../../assets/henriqueimagem.png'
import carolImagem from '../../../../assets/carolimagem.png'
import miguelImagem from '../../../../assets/miguelImagem.png'
import michelleImagem from '../../../../assets/michelleimagem.png'
import andressaImagem from '../../../../assets/andressaimagem.png'
import sophiaImagem from '../../../../assets/sophiaimagem.png'
import ProfileCard from './ProfileCard/ProfileCard';

function MentoresSection(){

    const diasLuisa = [
        { label: 'D', ativo: true },
        { label: 'S', ativo: false },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: true },
        { label: 'Q', ativo: true },
        { label: 'S', ativo: false },
        { label: 'S', ativo: true },
      ];

      const diasMariana = [
        { label: 'D', ativo: false },
        { label: 'S', ativo: false },
        { label: 'T', ativo: true },
        { label: 'Q', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: false },
        { label: 'S', ativo: false },
      ];

      const diasHenrique = [
        { label: 'D', ativo: false },
        { label: 'S', ativo: true },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: true },
        { label: 'S', ativo: true },
      ];

      const diasCarol = [
        { label: 'D', ativo: true },
        { label: 'S', ativo: true },
        { label: 'T', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'Q', ativo: false },
        { label: 'S', ativo: true },
        { label: 'S', ativo: false },
      ];


    return(
        <>
        <section className="mentores-searchbar-section">
            <form action="#" className='mentores-searchbar-form'>
                <img src={SearchIcon} alt="ícone de lupa" className='mentores-searchbar-image'/>
                <input type="text" name="search" placeholder='Pesquisar mentor específico por nome ou área de especialidade...' className='mentores-searchbar-input'/>
            </form>
        </section>

        <main className="mentores-main-section">
            <section className="mentores-profile-section">
                <ProfileCard
                imagem={luisaImagem}
                nome="Luísa Bastos"
                role="Tech Recruiter"
                especialidade="Carreira"
                especialidade2="Currículo"
                especialidade3="Gestão"
                dias={diasLuisa}
                />

                <ProfileCard
                imagem={marianaImagem}
                nome="Mariana Pazzoli"
                role="Empreendedora em T.I"
                especialidade="Carreira"
                especialidade2="Comercial"
                especialidade3="Tech"
                dias= {diasMariana}
                />

                <ProfileCard
                imagem={henriqueImagem}
                nome="Henrique Oliveira"
                role="Arquiteto de Soluções"
                especialidade="Carreira"
                especialidade2="Cloud"
                especialidade3="Tech"
                dias= {diasHenrique}
                />

                <ProfileCard
                imagem={carolImagem}
                nome="Carol Fernandes"
                role="Project Manager"
                especialidade="Projetos"
                especialidade2="Gestão"
                especialidade3="Tech"
                dias= {diasCarol}
                />
            </section>

            <section className="mentores-profile-section">

            <ProfileCard
                imagem={miguelImagem}
                nome="Miguel Santiago"
                role="Engenheiro de Software Sr"
                especialidade="Engenharia"
                especialidade2="Cloud"
                especialidade3="Tech"
                dias= {diasMariana}
                />
            
            <ProfileCard
                imagem={michelleImagem}
                nome="Michelle Yoshida"
                role="Diretora de Arquitetura Cloud"
                especialidade="Cloud"
                especialidade2="Liderança"
                especialidade3="Tech"
                dias= {diasCarol}
                />

            <ProfileCard
                imagem={andressaImagem}
                nome="Andressa Panzo"
                role="UI/UX Designer"
                especialidade="Carreira"
                especialidade2="Tech"
                especialidade3="UI/UX"
                dias={diasLuisa}
                />

            <ProfileCard
                imagem={sophiaImagem}
                nome="Sophia Allenccino"
                role="Analista de Sistemas"
                especialidade="Carreira"
                especialidade2="Tech"
                especialidade3="Currículo"
                dias= {diasHenrique}
                />
            
            </section>
        </main>
        </>
    )
}

export default MentoresSection;
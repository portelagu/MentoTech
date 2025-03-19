import './MentoresSection.css'
import SearchIcon from '../../../../assets/searchIcon.svg'
import luisaImagem from '../../../../assets/luisaImagem.png'

function MentoresSection(){
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
               
            </section>
        </main>
        </>
    )
}

export default MentoresSection;
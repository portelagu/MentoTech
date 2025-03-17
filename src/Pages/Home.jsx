import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import AboutUs from "./Componentes/AboutUs/AboutUs";
import ActionBanner from "./Componentes/ActionBanner/ActionBanner";
import FirstSteps from "./Componentes/FirstSteps/FirstSteps";
import HeadBanner from "./Componentes/HeadBanner/HeadBanner";
import MentoriaInfo from "./Componentes/MentoriaInfo/MentoriaInfo";

function Home(){
    return(
    <div>
    <Header/>
    <HeadBanner/>
    <AboutUs/>
    <MentoriaInfo/>
    <FirstSteps/>
    <ActionBanner/>
    <Footer/>
    </div>
    )
}

export default Home;
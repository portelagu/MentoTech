import Home from "./Pages/Home/Home";
import Mentores from "./Pages/Mentores/Mentores";
import FaleConosco from "./Pages/FaleConosco/FaleConosco";
import SignUp from "./Pages/SignUp/SignUp";
import Login from './Pages/Login/Login'
import Pagamento from './Pages/Pagamento/Pagamento'

import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mentores" element={<Mentores/>}/>
        <Route path="/fale-conosco" element={<FaleConosco/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pagamento" element={<Pagamento/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

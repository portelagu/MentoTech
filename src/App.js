import Home from "./Pages/Home/Home";
import Mentores from "./Pages/Mentores/Mentores";
import FaleConosco from "./Pages/FaleConosco/FaleConosco";

import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mentores" element={<Mentores/>}/>
        <Route path="/fale-conosco" element={<FaleConosco/>}/>
      </Routes>
    </div>
  );
}

export default App;

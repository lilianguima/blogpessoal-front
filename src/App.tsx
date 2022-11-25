import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './componentes/estaticos/home/Home';
import NavBar from './componentes/estaticos/navbar/Navbar';
import About from './paginas/about/About';

function App() {
  return (
   <Router>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      </Routes>
   </Router>
  );
}

export default App;

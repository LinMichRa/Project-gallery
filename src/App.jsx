
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Anime1 } from './components/Anime1';
import { Anime2 } from './components/Anime2';
import { Anime3 } from './components/Anime3';
import { Anime4 } from './components/Anime4';
import { Anime5 } from './components/Anime5';
import { Anime6 } from './components/Anime6';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/anime1" element={<Anime1/>}/>
          <Route path="/anime2" element={<Anime2/>}/>
          <Route path="/anime3" element={<Anime3/>}/>
          <Route path="/anime4" element={<Anime4/>}/>
          <Route path="/anime5" element={<Anime5/>}/>
          <Route path="/anime6" element={<Anime6/>}/>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App


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
      <div>
        <h1 id="title" className='text-center my-3'>Proyecto Galería</h1>
      </div>
        <Routes>
          <Route path="/anime1" element={<Anime1 className='image-size'/>}/>
          <Route path="/anime2" element={<Anime2 className='image-size'/>}/>
          <Route path="/anime3" element={<Anime3 className='image-size'/>}/>
          <Route path="/anime4" element={<Anime4 className='image-size'/>}/>
          <Route path="/anime5" element={<Anime5 className='image-size'/>}/>
          <Route path="/anime6" element={<Anime6 className='image-size'/>}/>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App

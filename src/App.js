import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import "./App.css"
import SingleProject from './pages/SingleProject';

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project/:id' element={<SingleProject/>} />
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
//{}[]
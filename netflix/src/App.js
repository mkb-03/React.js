
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import Contact from './pages/Contact'
import MovieDetails from './pages/MovieDetails';
import items from './data';
function App() {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies movieItems={items} />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
      </Routes>

    </Router>
  );
}

export default App;

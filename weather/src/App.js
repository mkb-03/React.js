
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import WeatherDetails from './Pages/WeatherDetails';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<About/>} />
        <Route path='/:cityName' element={<WeatherDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;

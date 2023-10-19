import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import DoctorRegistration from './Pages/Doctor/DoctorRegistration';
import PatientRegistration from './Pages/Patient/PatientRegistration';
import PatientLogin from './Pages/Patient/PatientLogin';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctorRegistration" element={<DoctorRegistration />} />
        <Route path="/patientRegistration" element={<PatientRegistration />} />
        <Route path="/patientLogin" element={<PatientLogin />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

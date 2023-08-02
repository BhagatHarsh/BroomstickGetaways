// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import Events from './Components/Events.js';
import LoginSignup from './Components/LoginSignup.js';
import Register from './Components/Register.js';
import Event_template from './Components/Event_template.js';
import Profile from './Components/Profile.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Events' exact element={<Events/>} />
        <Route path='/LoginSignup' exact element={<LoginSignup/>} />
        <Route path='/register' exact element={<Register/>} />
        <Route path='/Event_template/:id' exact element={<Event_template/>} />
        <Route path='/Profile' exact element={<Profile/>} />
      </Routes>
      

    </Router>
  );
}

export default App;

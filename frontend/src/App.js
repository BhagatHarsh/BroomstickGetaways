// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import Events from './Components/Events.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import SmokeEffect from './Components/SmokeEffect';

function App() {
  return (
    <Router>
      {/* <Home/> */}
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Events' exact element={<Events/>} />
      </Routes>
      

    </Router>
  );
}

export default App;

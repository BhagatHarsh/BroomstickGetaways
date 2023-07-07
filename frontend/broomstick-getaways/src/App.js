import React from 'react';
import { Login } from './components/Login';
import { Background } from './components/Background';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Background />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
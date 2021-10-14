import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import Navbar from './components/UI/Navbar/Navbar.jsx';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;

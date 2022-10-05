import './App.css';
import {React, Fragment} from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (  
      <Router>
          <Header/>
      </Router>
  );
}

export default App;

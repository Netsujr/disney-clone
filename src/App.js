import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// must yarn + yarn add react-router-dom to start the server correctly...
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail/:id" element={ <Detail /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

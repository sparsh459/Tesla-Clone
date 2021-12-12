import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import carSlice from './features/car/carSlice';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

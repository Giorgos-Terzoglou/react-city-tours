import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.scss';
import TourList from './components/tourlist';

function App() {
  return (
    <main>
      <Navbar/>
      <TourList/>
    </main>
    
  );
}

export default App;

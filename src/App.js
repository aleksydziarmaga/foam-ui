import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FoamBuilder from './components/FoamBuilder';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <FoamBuilder />
    </div>
  );
}

export default App;

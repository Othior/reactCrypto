import React from 'react';
import './App.css';
import Listcoins from './components/Listcoins';
import Searchcrypto from './components/searchCrypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto</h1>
      </header>
      <main>
        <Listcoins></Listcoins>
        <Searchcrypto></Searchcrypto>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import './components/component.css';
import './assemblers/assesmblers.css';
import React from 'react';
import Nav from './components/intract/navigation';
import Views from './controllers/views';
import Social from './components/intract/social';

function App() {
  return (
    <div className="App">
      <Nav />
      <Views />
      <Social />
    </div>
  );
}

export default App;
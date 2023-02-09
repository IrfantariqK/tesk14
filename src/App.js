import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Counter />
        <p>
         (Wellcome To Task 14)
        </p>
        <p>
         This Task Can do Decrement and Increment numbers
        </p>
      </header>
    </div>
  );
}

export default App;

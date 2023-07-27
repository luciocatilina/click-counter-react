import './App.css';
import Button from './components/button';
import Contador from './components/contador';
import { useState } from 'react';

function App() {
  const add  = () => {
    setNumber(number + 1);
  };

  const reset = () => {
    setNumber(0)
  }

  const [number, setNumber] = useState(0)
 
  return (
    <div className="App">
      <h1>Contador de clicks</h1>

      <Contador 
      number = {number}
      />

      <Button
      texto= 'Add'
      isReset= {false}
      fx = {add} />

      <Button
      texto='Reset'
      isReset={true}
      fx = {reset}
      />
    </div>
  );
}

export default App;

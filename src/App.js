
import './App.css';
import {useState} from 'react';
import ButtonComponent from './components/ButtonComponent';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [randomArray, setRandomArray] = useState([]);

  const handleButtonCallback = (randomNumber) => {
    randomArray.push(randomNumber);
    setRandomArray(randomArray);
  }


  return (
    <div className="App">
      {randomArray.map(n => <p key={`element-${n}-${uuidv4()}`}>{n}</p>)}
      <ButtonComponent clickCallback={handleButtonCallback} />
    </div>
  );
}

export default App;

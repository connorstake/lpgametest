import './App.css';
import Game from './Game'

const data ={
  "Germany" : "Berlin",
  "Australia": "Sydney",
  "United States": "Washington DC"
}

function App() {
  return (
    <div className="App">
      <Game data={data}></Game>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Wordle from './components/Wordle'
import Keyboard from './components/Keyboard';
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <h1 className="wordle-heading">Wordle</h1>
      <Game/>
    </div>
  );
}

export default App;

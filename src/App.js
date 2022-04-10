import logo from './logo.svg';
import './App.css';
import Wordle from './components/Wordle'
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <h1>Wordle Jr</h1>
      <Wordle />
      <br/>
      <Keyboard />
    </div>
  );
}

export default App;

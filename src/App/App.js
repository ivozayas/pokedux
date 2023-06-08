import './App.css';
import { Header } from '../components/Header/Header';
import { PokemonsList } from '../components/PokemonsList/PokemonsList';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <PokemonsList/>
    </div>
  );
}

export default App;

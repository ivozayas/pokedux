import './App.css';
import { Header } from '../components/Header/Header';
import { PokemonsList } from '../components/PokemonsList/PokemonsList';
import { usePokemons } from './API';
import './App.css'

function App() {
  const { reduxPokemons } = usePokemons()

  return (
    <div className="App">
      <img src='../statics/NicePng_pokedex-png_2285786.png' alt="ORTOOOO"/>
      <Header/>
      <PokemonsList pokemons={reduxPokemons}/>
    </div>
  );
}

export default App;

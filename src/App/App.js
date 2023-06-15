import './App.css';
import { Header } from '../components/Header/Header';
import { PokemonsList } from '../components/PokemonsList/PokemonsList';
import { usePokemons } from './API';
import { NavBar } from '../components/NavBar/NavBar';
import './App.css'

function App() {
  const { reduxPokemons } = usePokemons()

  return (
    <div className="App">
      <NavBar></NavBar>
      <Header/>
      <PokemonsList pokemons={reduxPokemons}/>
    </div>
  );
}

export default App;

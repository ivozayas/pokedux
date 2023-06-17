import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getPokemonsWithDetails } from '../slices/DataSlice';

import { Header } from '../components/Header/Header';
import { PokemonsList } from '../components/PokemonsList/PokemonsList';
import { NavBar } from '../components/NavBar/NavBar';
import { Filter } from '../components/Filter/Filter';
import { PauseButton } from '../components/Music/PauseButton'
import { Audio } from '../components/Music/Audio';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonsWithDetails())
  }, [dispatch])

  const pokemons = useSelector((state) => state.data.pokemons);

  return (
    <div className="App">
      <Audio/>
      <NavBar></NavBar>
      <Header/>
      <Filter/>
      <PokemonsList pokemons={pokemons}/>
      <PauseButton/>
    </div>
  );
}

export default App;

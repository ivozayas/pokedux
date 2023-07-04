import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getPokemonsWithDetails } from '../slices/DataSlice';

import { NavBar } from '../components/NavBar/NavBar';
import { Audio } from '../components/Music/Audio';

import { Home } from '../routes/Home/Home';
import { Search } from '../routes/Search/Search';
import { Favorites } from '../routes/Favorites';
import { Contact } from '../routes/Contact/Contact';
import { PokemonDetails } from '../routes/PokemonDetails/PokemonDetails';
import { PauseButton } from "../components/Music/PauseButton"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonsWithDetails())
  }, [dispatch])

  return (
    <div className="App">
      <Audio/>
      <NavBar></NavBar>

      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pokemon-details/:id' element={<PokemonDetails/>}/>
        <Route path='/search/:searchValue' element={<Search/>}/>
      </Routes>

      <PauseButton/>
    </div>
  )
}

export default App;

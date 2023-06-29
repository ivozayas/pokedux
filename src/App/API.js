import axios from 'axios'

export async function getPokemonDetails(url){
    return axios.get(url)
            .then(res => res.data)
            .catch(err => console.log(err))
}

export async function getPokemons(){
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=350')
            .then((res) => res.data.results)
            .catch((err) => console.log(err));
}
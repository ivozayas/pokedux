import axios from 'axios'

export async function getPokemonDetails(url){
    return axios.get(url)
            .then(res => res.data)
            .catch(err => console.log(err))
}

export async function getPokemons(gen){
    let limit = 0,
        offset = 0

    switch(gen) {
        case 1:
            offset = 0
            limit = 151
            break;
        case 2:
            offset = 151
            limit = 100
            break;
        case 3:
            offset = 251
            limit = 135
            break;
        case 4:
            offset = 386
            limit = 107
            break;
        case 5:
            offset = 493
            limit = 156
            break;
        case 6: 
            offset = 649
            limit = 72
            break;
        case 7:
            offset = 721
            limit = 88
            break;
        case 8:
            offset = 809
            limit = 96
            break;
        case 9:
            offset = 905
            limit = 105
            break;
        default:
            offset = 0
            limit = 151
            break;
    }

    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then((res) => res.data.results)
            .catch((err) => console.log(err));
}
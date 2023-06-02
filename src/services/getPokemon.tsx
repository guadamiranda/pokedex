import axios from 'axios';

const pokemonServices = {
    getPokemon: async (number:any) => {
            try{
                const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
                return pokemon.data
            }
            catch (error){
                console.log('No Pokemon')
            }
        },
    
    getDescriptionPokemon: async (number:any) => {
            try{
                const pokemonDescription = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${number}`)
                return pokemonDescription.data
            }
            catch (error) {
                console.log('No description')
            }
        }
    }

export default pokemonServices

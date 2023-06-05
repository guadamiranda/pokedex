
type Sprite = {
    front_default: string,
    front_shiny: string
}

interface IActualPokemon {
    id: number,
    name: string,
    sprite: Sprite,
    types: Object
}


export default IActualPokemon
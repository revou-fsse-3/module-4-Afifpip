interface Props {
  pokemons: PokemonData[]
}

interface PokemonData {
  name: string;
}

const Pokemon = ({ pokemons } : Props) => {

  return (
    <ul>
      {pokemons.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  )
}

export default Pokemon
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from './hooks/useAxios';
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, clearAll] = useAxios('https://pokeapi.co/api/v2/pokemon/');

  //setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
  
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
      <button onClick={clearAll}>start over</button>
    </div>
  );
}

export default PokeDex;

import PokeCard from "./PokeCard";

const getPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0';
    const res = await fetch(url, {cache: 'force-cache', revalidate: 3600});

    return res.json();
};

const ListPokemons = async () => {

  const pokemons = await getPokemons();

  return (
    <div>
        {pokemons.results.map(pokemon => (
            <PokeCard
                key={pokemon.url}
                data={pokemon.url}
            />
        ))}
    </div>
  )
}

export default ListPokemons;
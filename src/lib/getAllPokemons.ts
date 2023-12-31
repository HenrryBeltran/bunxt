export default async function getAllPokemons(): Promise<PokemonList> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");

  if (!res.ok) throw new Error("Couldn't fetch the data");

  return res.json();
}

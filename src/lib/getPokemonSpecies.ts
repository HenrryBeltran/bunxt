import { PokemonSpecies } from "pokenode-ts";

export default async function getPokemonSpecies(name: string): Promise<PokemonSpecies> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);

  if (!res.ok) throw new Error("Couldn't fetch the data");

  return res.json();
}

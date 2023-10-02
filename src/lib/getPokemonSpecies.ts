import { PokemonSpecies } from "pokenode-ts";

export default async function getPokemonSpecies(
  name: string,
): Promise<PokemonSpecies | undefined> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);

  if (!res.ok) return undefined;

  return res.json();
}

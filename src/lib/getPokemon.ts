import { Pokemon } from "pokenode-ts";

export default async function getPokemon(name: string): Promise<Pokemon | undefined> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);

  if (!res.ok) return undefined;

  return res.json();
}

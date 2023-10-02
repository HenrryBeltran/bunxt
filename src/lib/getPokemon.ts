import { Pokemon } from "pokenode-ts";

export default async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);

  if (!res.ok) throw new Error("Couldn't fetch the data");

  return res.json();
}

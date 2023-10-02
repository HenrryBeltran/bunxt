import { FC } from "react";

interface Props {
  params: {
    pokemonName: string;
  };
}

async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) throw new Error("Couldn't fetch the data");

  return res.json();
}

const PokemonPage: FC<Props> = async ({ params: { pokemonName } }) => {
  const pokemon = await getPokemon(pokemonName);
  return (
    <>
      <h1>{pokemon.name}</h1>
    </>
  );
};

export default PokemonPage;

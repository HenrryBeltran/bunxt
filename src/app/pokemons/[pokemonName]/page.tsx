import { PokemonSpecies } from "@/components/PokemonSpecies";
import Image from "next/image";
import Link from "next/link";
import { PokemonClient } from "pokenode-ts";
import { FC } from "react";

interface Props {
  params: {
    pokemonName: string;
  };
}

async function getPokemon(name: string) {
  const api = new PokemonClient();

  try {
    return await api.getPokemonByName(name);
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't fetch the data");
  }
}

async function getPokemonGeneration(name: string) {
  const api = new PokemonClient();

  try {
    return await api.getPokemonSpeciesByName(name);
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't fetch the data");
  }
}

const PokemonPage: FC<Props> = async ({ params: { pokemonName } }) => {
  const pokemonData = getPokemon(pokemonName);
  const pokemonSpeciesData = await getPokemonGeneration(pokemonName);

  const [pokemon, pokemonSpecies] = await Promise.all([pokemonData, pokemonSpeciesData]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Link
        href="/pokemons"
        className="fixed left-8 top-16 text-blue-600 underline-offset-2 hover:underline"
      >
        Return
      </Link>
      <Image
        src={pokemon.sprites.front_default!}
        alt={`${pokemon.name} sprite`}
        width={256}
        height={256}
        className="mb-6 [image-rendering:pixelated]"
      />
      <h1 className="text-2xl font-bold capitalize text-slate-700">{pokemon.name}</h1>
      <ul className="mb-8 flex justify-center gap-1 capitalize text-slate-500">
        {pokemon.types.map(type => (
          <li
            key={type.type.name}
            className="flex gap-1 first:after:content-['•'] only:after:content-['']"
          >
            {type.type.name}
          </li>
        ))}
      </ul>
      <PokemonSpecies species={pokemonSpecies} />
    </main>
  );
};

export default PokemonPage;

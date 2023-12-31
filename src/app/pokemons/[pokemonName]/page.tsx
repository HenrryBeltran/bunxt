import { PokemonSpecies } from "@/components/PokemonSpecies";
import getAllPokemons from "@/lib/getAllPokemons";
import getPokemon from "@/lib/getPokemon";
import getPokemonSpecies from "@/lib/getPokemonSpecies";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const revalidate = 60;

interface Props {
  params: {
    pokemonName: string;
  };
}

export async function generateMetadata({
  params: { pokemonName },
}: Props): Promise<Metadata> {
  const pokemon = await getPokemon(pokemonName);

  if (!pokemon) {
    return {
      title: "Pokemon Not Found",
    };
  }

  return {
    title: `Bunxt - ${pokemon.name}`,
    description: `Pokemon page of ${pokemon.name}`,
  };
}

export default async function PokemonPage({ params: { pokemonName } }: Props) {
  const pokemon = await getPokemon(pokemonName);
  const pokemonSpeciesData = getPokemonSpecies(pokemonName);

  if (!pokemon) {
    return notFound();
  }

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
      <Suspense
        fallback={<h2 className="animate-pulse font-light text-slate-600">Loading...</h2>}
      >
        <PokemonSpecies speciesPromise={pokemonSpeciesData} />
      </Suspense>
    </main>
  );
}

export async function generateStaticParams() {
  const pokemons = await getAllPokemons();

  return pokemons.results.map(pokemon => ({ pokemonName: pokemon.name }));
}

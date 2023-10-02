import getAllPokemons from "@/lib/getAllPokemons";
import Link from "next/link";

export default async function PokemonsPage() {
  const pokemons = await getAllPokemons();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-16">
      <h1 className="text-4xl font-bold uppercase">Pokemon Page</h1>
      <div className="space-y-3 text-center">
        {pokemons.results.map(pokemon => (
          <div key={pokemon.name}>
            <Link
              href={`/pokemons/${pokemon.name.toLowerCase()}`}
              className="capitalize text-blue-700 drop-shadow"
            >
              {pokemon.name}
            </Link>
          </div>
        ))}
      </div>
      <Link
        href="/"
        className="fixed left-8 top-16 text-blue-600 underline-offset-2 hover:underline"
      >
        Go Home
      </Link>
    </main>
  );
}

import getAllPokemons from "@/lib/getAllPokemons";
import Link from "next/link";

export default async function PokemonsPage() {
  const pokemons = await getAllPokemons();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16">
      <h1 className="text-4xl font-bold uppercase">Pokemon Page</h1>
      <div className="space-y-6 text-center">
        {pokemons.map(pokemon => (
          <div key={pokemon.name}>
            <Link
              href={`/pokemons/${pokemon.name.toLowerCase()}`}
              className="text-xl font-bold"
            >
              {pokemon.name}
            </Link>
            <ul className="flex justify-center gap-1">
              {pokemon.type.map(type => (
                <li
                  key={type}
                  className="flex justify-center gap-1 tracking-wide text-slate-500 first:after:content-['•'] only:after:content-[''] dark:text-slate-300"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link
        href="/"
        className="pb-6 pt-8 text-blue-600 underline-offset-2 hover:underline lg:static lg:w-auto lg:p-4"
      >
        Go Home
      </Link>
    </main>
  );
}

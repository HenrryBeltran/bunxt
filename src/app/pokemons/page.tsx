import Link from "next/link";

async function getAllPokemons(): Promise<Pokemon[]> {
  const res = await fetch("http://localhost:3000/api/pokemons");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PokemonPage() {
  const pokemons = await getAllPokemons();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16">
      <h1 className="text-4xl font-bold uppercase">Pokemon Page</h1>
      <div className="space-y-6 text-center">
        {pokemons.map(pokemon => (
          <div key={pokemon.name}>
            <h3 className="text-xl font-bold">{pokemon.name}</h3>
            <ul className="flex justify-center gap-1">
              {pokemon.type.map(type => (
                <li
                  key={type}
                  className="flex justify-center gap-1 tracking-wide text-slate-300 first:after:content-['•'] only:after:content-['']"
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

import { PokemonSpecies as Species } from "pokenode-ts";

interface Props {
  speciesPromise: Promise<Species | undefined>;
}

export async function PokemonSpecies({ speciesPromise }: Props) {
  const species = await speciesPromise;

  if (!species) return <h3 className="text-rose-500 text-center">Species not found</h3>

  return (
    <div className="rounded-full bg-purple-300 px-3.5 py-1">
      <p className="capitalize text-purple-900">{species.generation.name}</p>
    </div>
  );
}

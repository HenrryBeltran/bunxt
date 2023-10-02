import { PokemonSpecies as Species } from "pokenode-ts";

interface Props {
  speciesPromise: Promise<Species>;
}

export async function PokemonSpecies({ speciesPromise }: Props) {
  const species = await speciesPromise;

  return (
    <div className="rounded-full bg-purple-300 px-3.5 py-1">
      <p className="capitalize text-purple-900">{species.generation.name}</p>
    </div>
  );
}

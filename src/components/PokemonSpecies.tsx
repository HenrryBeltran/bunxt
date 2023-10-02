import { PokemonSpecies as Species } from "pokenode-ts";
import { FC } from "react";

interface Props {
  species: Species;
}

export const PokemonSpecies: FC<Props> = ({ species }) => {
  return (
    <div className="rounded-full bg-purple-300 px-3.5 py-1">
      <p className="capitalize text-purple-900">{species.generation.name}</p>
    </div>
  );
};

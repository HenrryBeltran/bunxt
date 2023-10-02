type Pokemon = { name: string; type: string[] };

type PokemonList = {
  count: number;
  next: URL;
  previous: null | string;
  results: [
    {
      name: string;
      url: URL;
    },
  ];
};

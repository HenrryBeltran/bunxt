export default async function getAllPokemons(): Promise<Pokemon[]> {
  const hostname =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://bunxt.vercel.app";

  const res = await fetch(`${hostname}/api/pokemons`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

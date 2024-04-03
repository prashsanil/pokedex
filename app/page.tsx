import PokeCard from "@/components/PokeCard";
import Pokemons from "@/components/Pokemons";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="m-4">
      <SearchBar />
      {/* <PokeCard /> */}
      <Pokemons />
    </main>
  );
}
import { fetchTrendingMovies } from "../lib/fetchTrendingMovies";
import Hero from "./components/Hero";
import TrendingMovies from "./components/TrendingMovies";
import Footer from "./components/Footer";

export default async function HomePage() {
  const movies = await fetchTrendingMovies();

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow px-4">
        <TrendingMovies title="Trending Movies" movies={movies} />
      </main>
      <Footer />
    </div>
  );
}

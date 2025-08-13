// components/TrendingMovies.jsx
import { fetchTrendingMovies } from "@/lib/fetchTrendingMovies";
import MovieCard from "./MovieCard";


export default async function TrendingMovies() {
  const movies = await fetchTrendingMovies();

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold text-white mb-6">
        Trending This Week
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
// app/components/TrendingMovies.tsx
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
}

export default function TrendingMovies({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

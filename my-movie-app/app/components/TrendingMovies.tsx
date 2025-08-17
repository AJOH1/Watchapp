// components/TrendingMovies.jsx
// import { fetchTrendingMovies } from "@/lib/fetchTrendingMovies";
import MovieCard from "./MovieCard";


type TrendingMoviesProps = {
  title: string;
  movies: any[]; // later replace any[] with a Movie type
};

export default function TrendingMovies({ title, movies }: TrendingMoviesProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
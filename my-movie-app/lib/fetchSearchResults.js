// lib/fetchMoviesBySearch.ts
export async function fetchMoviesBySearch(query: string) {
  if (!query) return [];

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies by search");
  }

  const data = await res.json();
  return data.results;
}

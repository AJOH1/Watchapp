export async function fetchTrendingMovies() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error("TMDB API key is missing. Check .env.local");
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
    { next: { revalidate: 3600 } } // cache for 1 hour
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  const data = await res.json();
  return data.results;
}

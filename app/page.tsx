import type { Metadata } from "next";

import styles from "./page.module.css";
import MovieCard from "./components/MovieCard";

interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const apiKey= process.env.API_KEY;

export const metadata: Metadata = {
  title: "Popular Movies",
  description: "Get all popular movies here",
};

const getMovies = async () => {
  const moviesList = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  const moviesListJSON = await moviesList.json();
  return moviesListJSON;
}

export default async function Home() {
  const movieList = await getMovies();
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>The Movie Database</h1>
      <div className={styles.container}>
       {
        movieList.results.length > 0 && movieList.results.map((movie: MovieDetails) => {
          return (
            <MovieCard 
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              description={movie.overview}
              id={movie.id} />
          )
        })
       }
      </div>
    </main>
  );
}

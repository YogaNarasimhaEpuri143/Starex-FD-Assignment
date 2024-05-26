import { useState, useEffect } from "react";
import { CanceledError, AxiosError } from "../services/api-client";
import movieService, { MovieStruc } from "../services/movies-service";

const useMovies = () => {
  const [movies, setMovies] = useState<MovieStruc[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = movieService.getAllMovies();

    request
      .then((res) => setMovies(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      });

    return () => cancel();
  }, []);

  return { movies, error };
};

export default useMovies;

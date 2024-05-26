import apiClient from "./api-client";

export interface MovieStruc {
  id: string;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
}

class MovieService {
  getAllMovies() {
    const controller = new AbortController();
    const request = apiClient.get<MovieStruc[]>("https://dummyapi.online/api/movies", { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  }
}

export default new MovieService();

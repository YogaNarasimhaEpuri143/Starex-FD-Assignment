import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

interface Movie {
  id: string;
  movie: string;
  rating: number;
  imdb_url: string;
  image: string;
}

interface MoviesState {
  moviesList: Movie[];
  favMovies: Movie[];
}

const initialState: MoviesState = {
  moviesList: [],
  favMovies: [],
};

const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    movieFetched: (movies, action: PayloadAction<Movie[]>) => {
      movies.moviesList = action.payload;
    },

    favMoviesUpdated: (movies, action: PayloadAction<Movie>) => {
      if (!movies.favMovies.find(({ id }) => id === action.payload.id)) movies.favMovies.push(action.payload);
    },

    favMoviesRemoved: (movies, action: PayloadAction<Movie>) => {
      console.log(current(movies.favMovies), action.payload);
      const filteredFavMovies = movies.favMovies.filter((m) => m.id !== action.payload.id);
      movies.favMovies = filteredFavMovies;
    },
  },
});

export const { movieFetched, favMoviesUpdated, favMoviesRemoved } = slice.actions;
export default slice.reducer;

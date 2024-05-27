import StarIcon from "./StarIcon";

import { useDispatch, useSelector } from "react-redux";

import { MovieStruc } from "../services/movies-service";
import { RootState } from "../store/configureStore";

import { favMoviesUpdated, favMoviesRemoved } from "../store/movies";

interface CardProps {
  movieItem: MovieStruc;
}

const Card = ({ movieItem }: CardProps) => {
  const { id: movieId, movie, imdb_url, rating } = movieItem;

  const dispatch = useDispatch();
  const favMovies = useSelector((store: RootState) => store.movie.favMovies);

  return (
    <div className="relative">
      <a href={imdb_url} target="_blank">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src="https://via.placeholder.com/300x450" alt="Movie Poster" className="w-full h-64 object-cover" />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-50">{movie}</h2>
            <p className="text-gray-400">Rating: {rating}</p>
          </div>
        </div>
      </a>

      <div className="absolute top-1 right-1" onClick={() => dispatch(favMovies.find(({ id }) => id === movieId) ? favMoviesRemoved(movieItem) : favMoviesUpdated(movieItem))}>
        <StarIcon isFavorited={favMovies.find(({ id }) => id === movieId) ? true : false} />
      </div>
    </div>
  );
};

export default Card;

//
// action: (payload: MovieStruc) => {
//   type: string;
//   payload: MovieStruc;
// };

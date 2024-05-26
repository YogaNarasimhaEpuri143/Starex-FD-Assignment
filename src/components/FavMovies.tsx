import StarIcon from "./StarIcon";
import Shimmer from "./Shimmer";

import { favMoviesRemoved } from "../store/movies";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./../store/configureStore";

const FavouriteMovies = () => {
  const favMovies = useSelector((store: RootState) => store.movie.favMovies);
  const dispatch = useDispatch();   

  if (favMovies.length === 0) return <p>No Movies are Selected ...</p>;

  if (!favMovies) return <Shimmer />;

  const dispMovies = favMovies.map((movieItem) => {
    const { id, movie, rating, imdb_url } = movieItem;

    return (
      <div key={id} className="relative">
        <a href={imdb_url} target="_blank">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/300x450" alt="Movie Poster" className="w-full h-64 object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-50">{movie}</h2>
              <p className="text-gray-400">Rating: {rating}</p>
            </div>
          </div>
        </a>

        <div className="absolute top-1 right-1" onClick={() => dispatch(favMoviesRemoved(movieItem))}>
          <StarIcon isFavorited={true} />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">{dispMovies}</div>
      </div>
    </>
  );
};

export default FavouriteMovies;

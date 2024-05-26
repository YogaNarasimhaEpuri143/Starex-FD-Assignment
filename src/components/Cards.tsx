import StarIcon from "./StarIcon";
import Shimmer from "./Shimmer";
import useMovies from "../hooks/useMovies";

import { useDispatch } from "react-redux";
import { favMoviesUpdated } from "../store/movies";

const Cards = () => {
  const dispatch = useDispatch();

  const { movies, error } = useMovies();

  if (error) return <p className="text-danger">{error}</p>;

  if (!movies) return <Shimmer />;

  const dispMovies = movies.map((movieItem) => {
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

        <div className="absolute top-1 right-1" onClick={() => dispatch(favMoviesUpdated(movieItem))}>
          <StarIcon isFavorited={false} />
        </div>
      </div>
    );
  });

  return (
    <>
      {error && <p>{error}</p>}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">{dispMovies}</div>
      </div>
    </>
  );
};

export default Cards;

/**
 * Network Connection, Server offline  (try-catch block)
 *
 * Type Annotation is not allowed in catch block
 * Cancelling Fetch Request
 *
 * State Restoration -> restore previous state on the second mount in Strict Mode.   (User Navigated to Other Page)
 *
 * Services, Provide Funationality to the application
 *
 * Component Primary Responsibility is to return the UI & Handle User Interactiions at a high level.
 * apiClient
 * movieService   ->  Encapusilate of making HTTP Requests.  (Promises)
 *
 */

/**
 * Effect Dependencies & Clean-Up
 * Fetching Data
 * Cancelling a Fetch Request
 * Reusable API Client
 * Movie Service
 * Generic HTTP Service
 * Custom Data Fetching Hook
 *
 */

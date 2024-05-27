import Shimmer from "./Shimmer";
import useMovies from "../hooks/useMovies";
import Card from "./Card";

const Cards = () => {
  const { movies, error } = useMovies();

  if (error) return <p className="text-danger">{error}</p>;

  if (!movies) return <Shimmer />;

  const dispMovies = movies.map((movieItem) => {
    return <Card key={movieItem.id} movieItem={movieItem} />;
  });

  return (
    <>
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
 * Reusable API Client                --> Not to repeat the Base URL.
 * Movie Service                      --> Component not to know, about endpoints, http methods, all http logic.  (Like Chef)
 * Generic HTTP Service
 * Custom Data Fetching Hook          --> For Reusablility if any Another Component needed the same data.
 */

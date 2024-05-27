import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

import { RootState } from "./../store/configureStore";

import Card from "./Card";

const FavouriteMovies = () => {
  const favMovies = useSelector((store: RootState) => store.movie.favMovies);

  if (favMovies.length === 0) return <p>No Movies are Selected ...</p>;

  if (!favMovies) return <Shimmer />;

  const dispMovies = favMovies.map((movieItem) => {
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

export default FavouriteMovies;

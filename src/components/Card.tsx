import StarIcon from "./StarIcon";

import { useDispatch } from "react-redux";

import { MovieStruc } from "../services/movies-service";

interface CardProps {
  movieItem: MovieStruc;
  action: (payload: MovieStruc) => { type: string; payload: MovieStruc };
}

const Card = ({ movieItem, action }: CardProps) => {
  const { movie, imdb_url, rating } = movieItem;

  const dispatch = useDispatch();

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

      <div className="absolute top-1 right-1" onClick={() => dispatch(action(movieItem))}>
        <StarIcon isFavorited={false} />
      </div>
    </div>
  );
};

export default Card;

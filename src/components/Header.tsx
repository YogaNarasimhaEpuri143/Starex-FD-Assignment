import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex border border-black items-center h-20 pl-10">
      <Link to="/">
        <h1 className="text-3xl font-bold  mr-10">Movie Collection</h1>
      </Link>
      <Link to="/favMovies">
        <button className="bg-gray-500 text-white p-2 rounded-xl">Your Favourite Movies</button>
      </Link>
    </div>
  );
};

export default Header;

import Cards from "./components/Cards";
import FavouriteMovies from "./components/FavMovies";
import AppLayout from "./layouts/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/configureStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Cards />,
      },
      {
        path: "/favmovies",
        element: <FavouriteMovies />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;

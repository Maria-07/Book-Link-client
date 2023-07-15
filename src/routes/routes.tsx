import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import WishList from '../pages/WishList/WishList';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import NotFound from '../pages/NotFound';
import AllBooks from '../pages/Books/AllBooks';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <AllBooks />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/wish-list',
        element: <WishList />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;

import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import { NotFound } from './pages/NotFound';
import { Private } from './routes/Private';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Private> <Admin /> </Private>
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export { router };

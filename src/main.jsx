import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from './layuots/MainLayout';
import './assets/styles/index.scss';
import { ThemeProvider } from './providers/ThemeProvider';
import { Theme } from './const/theme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/pizzas",
        element: <div>Pizzas</div>,
      },
      {
        path: "/rolls",
        element: <div>Rolls</div>,
      },
      {
        path: "/others",
        element: <div>Others</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider initialTheme={Theme.LIGHT}>
  <RouterProvider router={router} />
  </ThemeProvider>
)

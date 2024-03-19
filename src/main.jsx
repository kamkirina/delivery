import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from './layuots/MainLayout';
import './assets/styles/index.scss';
import { ThemeProvider } from './providers/ThemeProvider';
import { Theme } from './const/theme';
import { Suspense } from 'react';
import { routerNavigations } from './const/router';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routerNavigations.map(({path, element}) => ({
      path,
      element: <Suspense fallback={<div>loading..</div>}>{element}</Suspense>,
    }))
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider initialTheme={Theme.LIGHT}>
  <RouterProvider router={router} />
  </ThemeProvider>
)

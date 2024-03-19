import { MainPage } from "../pages/MainPage";
import { PizzasPage } from "../pages/Pizzaspage";
import { RollsPage } from "../pages/RollsPage";
import { OtherPage } from "../pages/OtherPage";
import {NotFoundPage} from "../pages/NotFoundPage";

const routerNavigations = [
    {
        path: "/",
        element: <MainPage/>
      },
      {
        path: "/pizzas",
        element: <PizzasPage/>,
      },
      {
        path: '/rolls',
        element: <RollsPage/>,
      },
      {
        path: "/others",
        element: <OtherPage/>,
      },
      {
        path: "*",
        element: <NotFoundPage/>,
      },
]

export {routerNavigations}
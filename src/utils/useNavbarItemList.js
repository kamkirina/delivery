import PizzaProduct from "../assets/img/pizzaProduct.svg?react";
import RollProduct from "../assets/img/rollProduct.svg?react";
import OtherProduct from "../assets/img/otherProduct.svg?react";

const useNavbarItemsList = () => {
  const navbarItemsList = [
    {
      path: "/pizzas",
      Icon: PizzaProduct,
      text: "Пиццы",
    },
    {
      path: "/rolls",
      Icon: RollProduct,
      text: "Роллы",
    },
    {
      path: "/others",
      Icon: OtherProduct,
      text: "Прочее",
    },
  ];

  return navbarItemsList;
};

export { useNavbarItemsList };

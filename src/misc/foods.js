import CS from "../assets/img/chicken.png";
import PL from "../assets/img/plantain.png";
import LF from "../assets/img/leaf.png";
import CU from "../assets/img/cucumber.png";
import GD from "../assets/img/goddess.png";
import OrderBtn from "../components/Buttons/OrderBtn";

export const FOODS = [
  {
    id: 1,
    image: LF,
    price: "$30",
    header: "Orange Veggie Salad Combo",
    words:
      "It is a vegetarian dinner which consists of the green leaf dressing mixed with leaf, orange, onins and tangerine.",
    btn: <OrderBtn color={"#FF0000"}>ORDER NOW</OrderBtn>,
    color: "#FF0000",
  },
  {
    id: 2,
    image: PL,
    price: "$38",
    header: "Plantain Goddess Veggie Combo",
    words:
      "It is a plantain smashed dinner which consists of plantain dressing mixed with flour and some ingredients.",
    btn: <OrderBtn color={"#800080"}>ORDER NOW</OrderBtn>,
    color: "#800080",
  },
  {
    id: 3,
    image: CS,
    price: "$32",
    header: "Green Goddess Chicken Salad",
    words:
      "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
    btn: <OrderBtn color={"#FF922C"}>ORDER NOW</OrderBtn>,
    color: "#FF922C",
  },
  {
    id: 4,
    image: CU,
    price: "$35",
    header: "Asian Cucumber Salad",
    words:
      "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
    btn: <OrderBtn color={"#54BF29"}>ORDER NOW</OrderBtn>,
    color: "#54BF29",
  },
  {
    id: 5,
    image: GD,
    price: "$34",
    header: "Goddess Salad Mixture",
    words:
      "It is a non vegetarian salad which consists of the goddess dressing mixed with chicken, orange, tomato and onions.",
    btn: <OrderBtn color={"#007C80"}>ORDER NOW</OrderBtn>,
    color: "#007C80",
  },
];

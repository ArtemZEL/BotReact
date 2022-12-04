import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData()
{
    return [
        {title:"Пицца", price:20.99, Image:pizzaImg,id:1},
        {title:"Бургер", price:2.00, Image:burgerImg,id:2},
        {title:"Кока-кола", price:1.80, Image:cocaImg,id:3},
        {title:"Кебаб", price:13.50, Image:kebabImg,id:4},
        {title:"Салат", price:5.99, Image:saladImg,id:5},
        {title:"Вода", price:0.90, Image:waterImg,id:6},
        {title:"Мороженное", price:3.99, Image:iceCreamImg,id:7}
    ];
}
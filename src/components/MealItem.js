import Button from "./UI/Button";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

const MealItem = (props) => {
  const { addItem } = useContext(CartContext);

  const price = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "EUR",
  }).format(props.meal.price);

  const handleAddToCart = () => {
    const newItem = props.meal;
    addItem(newItem);
  };

  return (
    <li className="meal-item">
      <article>
        <img
          src={require(`../assets/${props.meal.image}`)}
          alt={props.meal.name}
        />
        <div>
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{props.meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;

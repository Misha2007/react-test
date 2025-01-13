import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import { useContext, useState } from "react";
import Modal from "./UI/Modal";

const Header = () => {
  const { cart, getCartItemCount, clearCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCheckout = () => {
    alert("Order placed successfully!");
    clearCart();
    setIsCartOpen(false);
  };

  const totalSum = cart.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textonly={true} onClick={handleCartClick}>
          Cart ({getCartItemCount()})
        </Button>
      </nav>
      {isCartOpen && (
        <Modal isOpen={isCartOpen}>
          <h2>Your Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: €{totalSum.toFixed(2)}</strong>
          </div>
          <div className="modal-actions">
            <Button onClick={handleCartClick} textonly={true}>
              Close
            </Button>
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        </Modal>
      )}
    </header>
  );
};

export default Header;

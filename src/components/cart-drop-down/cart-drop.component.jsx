import Button from "../buttons/buttons.component";
import "./cart-drop.style.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

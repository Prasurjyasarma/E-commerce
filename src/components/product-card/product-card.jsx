import "./product-card.scss";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../buttons/buttons.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const addProducttoCart = () => {
    addItemToCart(product);
  };

  useEffect(() => {
    if (isPopupOpen) {
      // Delay opening the popup after the state is updated
      setTimeout(openPopup, 0);
    }
  }, [isPopupOpen]);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} onClick={openPopup} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProducttoCart}>
        Add to cart
      </Button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              ❌
            </span>
            <h2>{name}</h2>
            <img src={imageUrl} alt={`${name}`} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              eveniet id, recusandae cum cupiditate repellendus distinctio
              laborum labore beatae inventore?
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

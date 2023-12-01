import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation-container.style.scss";
import { ReactComponent as LogoWeb } from "../../Assets/reshot-icon-enneagram-7C6RTLYJ3Z.svg";
// import { UserContext } from "../../context/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-drop-down/cart-drop.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <LogoWeb className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <h2>Shop</h2>
          </Link>
          <Link className="nav-link" to="/about-section">
            <h2>about</h2>
          </Link>
          <Link className="nav-link" to="/studio-section">
            <h2>studio</h2>
          </Link>
          <CartIcon />
          <Link className="nav-link" to="/sign-in">
            <h2>
              <i class="fa-solid fa-user"></i>
            </h2>
          </Link>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

import "./cart.css";
import ProductInCart from "../components/productInCart";
import { useContext } from "react";
import DataContext from "../store/dataContext";

function Cart() {
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

  function getProductCount() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }

    return total;
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity * cart[i].price;
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <h1>This is your cart!</h1>
      <h5>You have {getProductCount()} items in your cart</h5>

      <div className="parent">
        <div className="list">
          {cart.map((prod) => (
            <ProductInCart key={prod.id} data={prod} />
          ))}
        </div>
        <div className="side-menu">
          <h2>Total:</h2>
          <h3>${getTotal()}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;

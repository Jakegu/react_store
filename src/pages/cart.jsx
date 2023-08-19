import "./cart.css";

import { useContext } from "react";
import DataContext from "../store/dataContext";

function Cart() {
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

  return (
    <div className="cart page">
      <h1>This is your cart!</h1>
      <h5>You have {cart.length} items in your cart</h5>
    </div>
  );
}

export default Cart;

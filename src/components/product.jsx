import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useEffect, useState } from "react";
import DataContext from "../store/dataContext";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(DataContext).addToCart;

  useContext(DataContext);

  useEffect(function () {}, []);

  function handleQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function addProduct() {
    const prodWithQuantity = {
      ...props.data,
      quantity: quantity,
    };

    addToCart(prodWithQuantity);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>${props.data.price.toFixed(2)}</label>
        <label>${getTotal()}</label>
      </div>
      <QuantityPicker onChange={handleQuantityChange} />
      <button onClick={addProduct} className="btn btn-small btn-success">
        Add
      </button>
    </div>
  );
}

export default Product;

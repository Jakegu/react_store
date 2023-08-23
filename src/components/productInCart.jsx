import "./productInCart.css";

function ProductInCart(props) {
  function getProdTotal() {
    const total = props.data.price * props.data.quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product-cart">
      <img src={"/images/" + props.data.image} alt=""></img>
      <div className="title">
        <h5>{props.data.title}</h5>
        <h6>{props.data.category}</h6>
      </div>
      <label>${props.data.price.toFixed(2)}</label>
      <label>{props.data.quantity}</label>
      <label>${getProdTotal()}</label>

      <button className="btn btn-sm btn-danger">Remove</button>
    </div>
  );
}

export default ProductInCart;

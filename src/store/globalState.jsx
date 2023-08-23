import DataContext from "./dataContext";
import { useState } from "react";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    name: "Jake",
    id: 123,
    email: "jakegulotta@gmail.com",
  });

  function addToCart(prod) {
    let copy = [...cart];

    let found = false;

    for (let i = 0; i < copy.length; i++) {
      let prodInCart = copy[i];
      if (prod.id === prodInCart.id) {
        prodInCart.quantity += prod.quantity;
        found = true;
      }
    }

    if (!found) {
      copy.push(prod);
    }

    setCart(copy);
  }
  function removeFromCart() {
    console.log("global remove");
  }

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalState;

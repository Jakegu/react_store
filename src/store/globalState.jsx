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
    copy.push(prod);
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

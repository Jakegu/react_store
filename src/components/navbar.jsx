import "./navbar.css";

import { Link } from "react-router-dom";

import { useContext } from "react";
import DataContext from "../store/dataContext";

function Navbar() {
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

  function getProductCount() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }

    return total;
  }

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Tritone
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/catalog">
                Catalog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/admin">
                Admin
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About Me
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="user-info">
              <i className="fa-solid fa-circle-user"></i>
              <label>{user.name}</label>
            </div>

            <Link className="btn btn-outline-success btn-cart" to="/cart">
              {getProductCount()}
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

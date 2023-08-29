import { useEffect, useState } from "react";
import "./admin.css";
import DataService from "../services/dataService";

function Admin() {
  const [product, setProduct] = useState({ title: "" });
  const [allProducts, setAllProducts] = useState([]);

  useEffect(function () {
    loadData();
  }, []);

  async function loadData() {
    let service = new DataService();
    const prods = await service.getProduct();
    setAllProducts(prods);
  }

  function handleInputChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);

    let copy = { ...product };
    copy.price = parseFloat(copy.price);
    let service = new DataService();
    service.saveProduct(copy);

    clearForm();
  }

  function clearForm() {
    setProduct({ title: "", category: "", image: "", price: "" });
  }

  return (
    <div className="admin page">
      <h1>Store Management</h1>

      <div className="parent-container">
        <h3>Register Products</h3>

        <div>
          <label className="form-label">Title</label>
          <input
            value={product.title}
            onChange={handleInputChange}
            name="title"
            type="text"
            className="form-control"
          />
        </div>

        <div>
          <label className="form-label">Category</label>
          <input
            value={product.category}
            onChange={handleInputChange}
            name="category"
            type="text"
            className="form-control"
          />
        </div>

        <div>
          <label className="form-label">Image</label>
          <input
            value={product.image}
            onChange={handleInputChange}
            name="image"
            type="text"
            className="form-control"
          />
        </div>

        <div>
          <label className="form-label">Price</label>
          <input
            value={product.price}
            onChange={handleInputChange}
            name="price"
            type="number"
            className="form-control"
          />
        </div>

        <div>
          <button type="button" onClick={saveProduct} className="btn btn-dark">
            Save Product
          </button>
        </div>

        <hr />

        <ul className="product-list>">
          {allProducts.map((prod) => (
            <li key={prod._id}>
              {prod.title} ${prod.price}
              <buuton className="btn btn-sm btn-danger">Remove</buuton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;

import { useState } from "react";
import "./admin.css";

function Admin() {
  const [product, setProduct] = useState({ title: "" });

  function handleInputChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);

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
      </div>
    </div>
  );
}

export default Admin;

import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="product-card" key={product.id}>
        <img src={product.image} className="product-card-image" />
        <div className="product-card-content">
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-price">${product.price}</p>
          <div className="product-card-actions">
            <Link className="btn btn-secondary">View details</Link>
            <button className="btn btn-primary">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

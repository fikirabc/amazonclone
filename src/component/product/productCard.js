// @ts-nocheck
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currency/currencyFormat";
import Classes from "../product/product.module.css"
import { Link } from "react-router-dom";
function productCard({ product, flex, renderDesc}) {
  const { image, id, title, rating, price, description } = product; 

  return (
    <div
      className={`${Classes.card_container} ${
        flex ? Classes.products_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="pics" />
      </Link>
      <div>
        <h4>{title}</h4>
       {renderDesc && <div style={{ maxWidth: "100%", width: "500px" }}>{description}</div>}

        <div className={Classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={Classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default productCard;

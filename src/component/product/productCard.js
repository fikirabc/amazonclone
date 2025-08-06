// @ts-nocheck
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currency/currencyFormat";
import Classes from "../product/product.module.css"
function productCard({ product }) {
  const { image, title, rating, price } = product;
  return (
    <div className={`${Classes.card_container}`}>
      <a href="/">
        <img src={image} alt="pics" />
      </a>
      <div>
        <h4>{title}</h4>
        <div className={Classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
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

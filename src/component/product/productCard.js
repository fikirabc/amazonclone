// @ts-nocheck
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currency/currencyFormat";
import Classes from "../product/product.module.css"
import { Link } from "react-router-dom";
import {DataContext} from "../dataProvider/dataProvider"
import { Type } from "../../utillity/action.type"
import { useContext } from "react";
function ProductCard({ product, flex, renderDesc, renderAdd}) {
  const { image, id, title, rating, price, description } = product; 


  const [state,dispatch]=useContext(DataContext)
  console.log(state)
  const addToCart=()=>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image, id, title, rating, price,description,
      },
    });
  }

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
        {

         renderAdd && <button className={Classes.button} onClick={addToCart}>Add to Cart</button> 
        }
        
      </div>
    </div>
  );
}

export default ProductCard;

import Layout from "../../component/layout/layout";
import ProductCard from "../../component/product/productCard";
import { DataContext } from "../../component/dataProvider/dataProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../component/currency/currencyFormat";
import { Type } from "../../utillity/action.type";
// @ts-ignore
import Classes from "./cart.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  // @ts-ignore
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increase = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
const decrease =(id)=>{
  dispatch({
    type:Type.REMOVE_FROM_BASKET,
  id
})
}

  return (
    <Layout>
      <section className={Classes.container}>
        <div className={Classes.cart_container}>
          <h2>Hello</h2>
          <h3>You Shopping Basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps! No ithem in Your Cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={Classes.cart_products}>
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={Classes.btn_container}>
                    <button
                      className={Classes.btn}
                      onClick={() => increase(item)}
                    >
                      <IoIosArrowUp />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={Classes.btn}
                      onClick={() => decrease(item.id)}
                    >
                      <IoIosArrowDown />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={Classes.subtotal}>
            <div>
              <p>Subtotal({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This Order Contains a Gift</small>
            </span>
            <Link to="/payment">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;

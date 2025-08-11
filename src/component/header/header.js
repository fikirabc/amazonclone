// @ts-nocheck
import React from 'react';
import { BiCart } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Classes from "./header.module.css"
import { MdOutlineLocationOn } from "react-icons/md";
import LowerHeader from './lowerHeader';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../dataProvider/dataProvider';

const Header = () => {

  const [{basket}, dispatch]=useContext(DataContext)
  console.log(basket.length)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
    return (
      <section className={Classes.fixed}>
        <section>
          <section className={Classes.header_container}>
            <div className={Classes.logo_container}>
              {/* logo */}
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="log"
                />
              </Link>
              {/* delivery */}
              <span>
                {/* icon */}
                <MdOutlineLocationOn />
              </span>

              <div className={Classes.delivery}>
                <p>Delivery To</p>
                <span>Ethiopia</span>
              </div>
            </div>

            {/* search */}
            <div className={Classes.search}>
              <select>
                <option value="">All </option>
              </select>

              <input type="text" placeholder="Amazon Search" />
              <FaSearch size={25} />
            </div>

            <div className={Classes.order_container}>
              <Link to="/" className={Classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/960px-Flag_of_the_United_States.png"
                  alt="Search"
                />
                <select>
                  <option>EN</option>
                </select>
              </Link>
              <Link to="/signin">
                <div>
                  <p>Sign In</p>
                  <span>Account & List</span>
                </div>
              </Link>
              <Link to="/order">
                <div>
                  <p>Returnes</p>
                  <span>& Orders</span>
                </div>
              </Link>

              <Link to="/cart" className={Classes.cart}>
                <span>{totalItem}</span>
                <BiCart />
              </Link>
            </div>
          </section>
          <LowerHeader />
        </section>
      </section>
    );
}

export default Header;

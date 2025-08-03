import React from 'react';
import { BiCart } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Classes from "./header.module.css"
import { MdOutlineLocationOn } from "react-icons/md";




const Header = () => {
    return (
            <section>
            <section className={Classes.header_container}>
                <div className={Classes.logo_container}>
                    {/* logo */}
                    <a href="/">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="log"/>
                    </a>
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
                    
                    <input type="text" placeholder="Amazon Search"/>
                    <FaSearch size={25}/>
                </div>

                <div className={Classes.order_container}>
                    <a href="/" className={Classes.language}>
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/960px-Flag_of_the_United_States.png" alt="Search"/>
                    <select>
                        <option>EN</option>
                    </select>
                    </a>
                    <a href='/'>
                    <div>
                        <p>Sign In</p>
                        <span>Account & List</span>
                    </div>  
                    </a>
                    <a href='/'>
                        <div>
                            <p>Returnes</p>
                            <span>& Orders</span>
                        </div>
                    </a>
                    
                    <a href="/" className={Classes.cart}>
                        
                        <span>0 </span> 
                        <BiCart />
                        
                    </a>
                    
                </div>
               

            </section>
            </section>

        
       
    );
}

export default Header;

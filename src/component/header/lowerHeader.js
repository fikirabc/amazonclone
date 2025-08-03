import React from 'react';
import { IoIosMenu } from "react-icons/io";
import Classes from "./header.module.css"
const LowerHeader = () => {
    return (
        <div className={Classes.lower_container}>
            <ul>
                <li>
                <IoIosMenu />
                <p>All</p></li>
                <li>Today's Deals</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Card</li>
                <li>Sell</li>
            </ul>
        </div>
    );
}

export default LowerHeader;

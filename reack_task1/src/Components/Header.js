import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><img src="site.png" alt="site_logo"/></li>
                <li class="li_route"><Link to="/">Home</Link></li>
                <li class="li_route"><Link to="/MyOrders">My Order</Link></li>
                <li class="li_route"><Link to="/Cart">Cart</Link></li>
            </ul>
        </div>


    )
}
export default Header
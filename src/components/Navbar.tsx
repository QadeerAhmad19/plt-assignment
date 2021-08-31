import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export const Navbar: React.FC = () => {
    const totalItems: IProduct[] = useSelector(
        (state: CartState) => state.addedItems
      );
    return(
            <nav className="nav-wrapper pink accent-1">
                <div className="container">
                    <Link to="/" className="brand-logo">PrettyLittleThing</Link>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i><span className="numberCircle">{totalItems.length}</span></Link></li>
                    </ul>
                </div>
            </nav>
    );
};
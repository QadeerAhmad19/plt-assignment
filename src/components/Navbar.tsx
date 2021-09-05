import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export const Navbar: React.FC = () => {
    const totalItems: number = useSelector(
        (state: CartState) => state.addedItems && state.addedItems.length
      );
    return(
            <nav className="nav-wrapper pink accent-1">
                <div className="container">
                    <Link to="/" className="brand-logo">PrettyLittleThing</Link>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">My cart<span className="numberCircle">{totalItems}</span></Link></li>
                    </ul>
                </div>
            </nav>
    );
};
import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actionCreators";

const Product: React.FC<IProduct> = (item: IProduct) => {
    const dispatch: Dispatch<any> = useDispatch();
    const handleClick = (id: Number) => {
        dispatch(addToCart(id));
    };
    return (
        <div className="card product-item" key={item.id}>
                            <div className="card-image">
                                <img src={item.img} alt={item.name}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title">{item.name}</span>
                                <p className="colour"><b>{item.colour}</b></p>
                                <p className="price"><b>Price: &#163;{item.price}</b></p>
                                <button className="add-to-cart btn halfway-fab waves-effect waves-light pink accent-1" onClick={()=>{handleClick(item.id)}}>Add to Cart</button>
                            </div>
                    </div>
    )
}

export default Product;
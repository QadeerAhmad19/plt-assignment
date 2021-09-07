import React from 'react';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addQuantity, subtractQuantity } from "../store/actionCreators";
import { Link } from 'react-router-dom'

const Cart: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const items: IProduct[] = useSelector(
        (state: CartState) => state.addedItems
      );
    const totalItems: Number = useSelector(
        (state: CartState) => state.total
      );
    const handleRemove = (id: Number): void =>{
        dispatch(removeItem(id))
    };
    //to add the quantity
    const handleAddQuantity = (id: Number): void =>{
        dispatch(addQuantity(id))
    };
    //to substruct from the quantity
    const handleSubtractQuantity = (id: Number): void =>{
        dispatch(subtractQuantity(id))
    };
    return(
        <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <div className="collection">
                        {
                            items.length ?
                            (  
                                items.map((item, index)=>{
                                    return(
                                        <div className="row collection-item avatar valign-wrapper" key={index}>
                                            <div className="col m3 l3 item-img">
                                                <img src={item.img} alt={item.img} className=""/>
                                            </div>
                                            <div className="col m9 l9 s12">
                                                <div className="row">
                                                    <div className="col m9 l9 s12">
                                                        <span className="title">{item.name}</span>
                                                        <p>{item.colour}</p>
                                                        <p><b>Price: &#163; {item.price}</b></p>
                                                    </div>
                                                    <div className="col m3 l3 add-remove center-align">
                                                        <div className="row">
                                                            <div className="col m4 l4">
                                                                <Link to="/cart"><i className="material-icons" onClick={()=>handleAddQuantity(item.id)}>add</i></Link>
                                                            </div>
                                                            <div className="col m4 l4">
                                                                <div><b>{item.quantity}</b></div> 
                                                                <div>
                                                                    <a href="#" onClick={()=>handleRemove(item.id)}>Remove</a>
                                                                </div>
                                                            </div>
                                                            <div className="col m4 l4">
                                                                    <Link to="/cart"><i className="material-icons" onClick={()=>handleSubtractQuantity(item.id)}>remove</i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ):
                             (
                                <p className="collection-item">
                                    Nothing.
                                    <Link to="/">
                                        Go Home
                                    </Link>
                                </p>
                             )
                        }
                        { <div className="collection-item row">
                            <div className="col m12 l12 s12 right-align">
                                <b>Total: &#163; {totalItems}</b>
                            </div>
                        </div> }
                    </div>
                </div>          
            </div>
    )
}

export default Cart;
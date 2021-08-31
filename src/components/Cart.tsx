import React from 'react';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addQuantity, subtractQuantity } from "../store/actionCreators";
import { Link } from 'react-router-dom'

export const Cart: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const items: IProduct[] = useSelector(
        (state: CartState) => state.addedItems
      );
    const totalItems: Number = useSelector(
        (state: CartState) => state.total
      );
    const handleRemove = (id: Number)=>{
        dispatch(removeItem(id))
    };
    //to add the quantity
    const handleAddQuantity = (id: Number)=>{
        dispatch(addQuantity(id))
    };
    //to substruct from the quantity
    const handleSubtractQuantity = (id: Number)=>{
        dispatch(subtractQuantity(id))
    };
    return(
        <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {
                            items.length ?
                            (  
                                items.map(item=>{
                                    return(
                                        <li className="collection-item avatar" key={item.id}>
                                                    <div className="item-img"> 
                                                        <img src={item.img} alt={item.img} className=""/>
                                                    </div>
                                                    
                                                    <div className="item-desc">
                                                        <span className="title">{item.name}</span>
                                                        <p>{item.colour}</p>
                                                        <p><b>Price: &#163; {item.price}</b></p> 
                                                    </div>
                                                    <div className="add-remove row center-align">
                                                            <div className="col">
                                                                <Link to="/cart"><i className="material-icons" onClick={()=>handleAddQuantity(item.id)}>add</i></Link>
                                                            </div>
                                                            <div className="col">
                                                                <div><b>{item.quantity}</b></div> 
                                                                <div>
                                                                    <button className="waves-effect waves-light btn pink remove" onClick={()=>handleRemove(item.id)}>Remove</button>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <Link to="/cart"><i className="material-icons" onClick={()=>handleSubtractQuantity(item.id)}>remove</i></Link>
                                                            </div>
                                                        </div>
                                                </li>
                                         
                                    )
                                })
                            ):
                
                             (
                                <p>Nothing.</p>
                             )
                        }
                        { <li className="collection-item"><b>Total: &#163; {totalItems}</b></li> }
                    </ul>
                </div>          
            </div>
    )
}
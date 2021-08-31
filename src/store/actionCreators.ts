import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,SET_PRODUCTS,FILTER_PRODUCTS} from './actionTypes'

//add cart action
export const addToCart= (id: Number)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id: Number)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id: Number)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id: Number)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const setProducts = (products: Array<IProduct>) => {
  return {
    type: SET_PRODUCTS,
    products
  }
}

export const filterProducts = (selectedColor: string) => {
    return {
      type: FILTER_PRODUCTS,
      selectedColor
    }
  }
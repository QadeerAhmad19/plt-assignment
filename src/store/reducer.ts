import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,SET_PRODUCTS,FILTER_PRODUCTS } from './actionTypes'

const initialState: CartState = {
  items: [],
  // Note: Filter should work on server side not client for client 
  // we have to keep copy of original data set.
  cloneItems: [],
  addedItems: [],
  total: 0
};

const reducer = (
  state: CartState = initialState,
  action: Action
): CartState => {
    if(action.type === SET_PRODUCTS){
        return {
            ...state,
            items: action.products,
            cloneItems: action.products
            }
    }
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          if(addedItem) {
          //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
          addedItem.quantity += 1 
            return{
                ...state,
                total: parseFloat(state.total + addedItem.price)
                  }
        }
        else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : parseFloat(newTotal)
            }
        }
      }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        let newTotal: number = 0.0;
        if(itemToRemove) {
        //calculating the total
          newTotal = parseFloat((state.total - (itemToRemove.price * itemToRemove.quantity)).toFixed(2))
        }
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type=== ADD_QUANTITY){
      console.log("Add");
        let addedItem = state.items.find(item=> item.id === action.id)
        if(addedItem) {
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
        }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem && addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = parseFloat((state.total - addedItem.price).toFixed(2));
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
          if(addedItem) {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
          }
        }
        
    }
    if(action.type === FILTER_PRODUCTS){
      if(action.selectedColor == "show-all") {
        return {
          ...state,
          items: state.cloneItems 
        }
      } else {
        return {
          ...state,
          items: state.cloneItems.filter((f: IProduct) => f.colour == action.selectedColor) 
        }
      }
    }
  return state
}

export default reducer;

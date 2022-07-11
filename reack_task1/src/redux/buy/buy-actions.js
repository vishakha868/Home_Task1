import * as actionTypes from './buy-types';

export const addToCart=(itemID)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:itemID
        }
    }
}
export const proceedToCheck=(items)=>{
    return{
        type:actionTypes.CHECKOUT_BOOK,
        payload:items
        
    }
}
export const loadCurrentItem=(item)=>{
    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}

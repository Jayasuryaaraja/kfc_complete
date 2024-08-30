import {createSlice} from '@reduxjs/toolkit'

const storedItems = localStorage.getItem('cartItems')
const initialState = {
    cartItems : storedItems ? JSON.parse(storedItems):[]
};
const cartSlice = createSlice({
    name :'cart',
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            const newItems = action.payload
            const existingItem = state.cartItems.find(items=> items._id===newItems._id)
            if(existingItem){
                existingItem.quantity += newItems.quantity
            } 
            else
            {
                state.cartItems.push({
                _id:newItems._id,
                image:newItems.image,
                title:newItems.title,
                ds:newItems.ds,
                price:newItems.price,
                quantity:newItems.quantity    
                });
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

        }, 
        deletefromCart:(state,action)=>{
            state.cartItems = state.cartItems.filter((items)=> items._id !== action.payload._id)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        updateQuantity:(state,action) => {
            const {id,quantity} = action.payload;
            const itemToUpdate = state.cartItems.find((item)=> item._id === id);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems));

            }
        },
    },
});
export default cartSlice.reducer
export const {addTocart,deletefromCart,updateQuantity} =cartSlice.actions;
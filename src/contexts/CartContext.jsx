import React, { createContext, useContext, useReducer } from 'react'


const CartStateContext = createContext()
const CartDispatchContext = createContext()


function cartReducer(state, action) {
switch (action.type) {
case 'ADD': {
const existing = state.items.find(i => i.id === action.item.id)
if (existing) {
return {
...state,
items: state.items.map(i => i.id === action.item.id ? { ...i, qty: i.qty + action.qty } : i)
}
}
return { ...state, items: [...state.items, { ...action.item, qty: action.qty }] }
}
case 'REMOVE':
return { ...state, items: state.items.filter(i => i.id !== action.id) }
case 'UPDATE_QTY':
return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, qty: action.qty } : i) }
case 'CLEAR':
return { ...state, items: [] }
default:
throw new Error('Unknown action')
}
}


export function CartProvider({ children }) {
const [state, dispatch] = useReducer(cartReducer, { items: [] })
return (
<CartStateContext.Provider value={state}>
<CartDispatchContext.Provider value={dispatch}>
{children}
</CartDispatchContext.Provider>
</CartStateContext.Provider>
)
}


export function useCart() {
return useContext(CartStateContext)
}
export function useCartDispatch() {
return useContext(CartDispatchContext)
}
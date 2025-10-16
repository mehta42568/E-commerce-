import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart, useCartDispatch } from '../contexts/CartContext'
import CartItem from '../components/CartItem'


export default function CartPage(){
const cart = useCart()
const dispatch = useCartDispatch()
const navigate = useNavigate()


function remove(id){ dispatch({ type: 'REMOVE', id }) }
function update(id, qty){ dispatch({ type: 'UPDATE_QTY', id, qty }) }


const total = cart.items.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2)


return (
<div className="space-y-4">
<h1 className="text-2xl font-bold">Your Cart</h1>
{cart.items.length === 0 ? (
<div className="bg-white p-6 rounded shadow">
<p>Your cart is empty.</p>
<Link to="/products" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded">Shop products</Link>
</div>
) : (
<div className="grid md:grid-cols-3 gap-4">
<div className="md:col-span-2 space-y-3">
{cart.items.map(item => (
<CartItem key={item.id} item={item} onRemove={remove} onUpdate={update} />
))}
</div>
<aside className="bg-white p-4 rounded shadow">
<div className="flex justify-between">Subtotal <strong>${total}</strong></div>
<button onClick={() => navigate('/checkout')} className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded">Checkout</button>
</aside>
</div>
)}
</div>
)
}
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function ProductCard({ product, onAdd }){
return (
<motion.article whileHover={{ scale: 1.02 }} className="bg-white shadow rounded overflow-hidden">
<Link to={`/products/${product.id}`}>
<img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
</Link>
<div className="p-4">
<h3 className="font-semibold">{product.title}</h3>
<p className="text-sm text-gray-600">{product.category}</p>
<div className="mt-2 flex items-center justify-between">
<span className="font-bold">${product.price}</span>
<button onClick={() => onAdd(product)} className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">Add</button>
</div>
</div>
</motion.article>
)
}
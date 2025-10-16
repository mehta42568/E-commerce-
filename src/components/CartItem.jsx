import React from 'react'


export default function CartItem({ item, onRemove, onUpdate }){
return (
<div className="flex gap-4 items-center bg-white p-4 rounded shadow">
<img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
<div className="flex-1">
<div className="flex justify-between items-center">
<h4 className="font-semibold">{item.title}</h4>
<button onClick={() => onRemove(item.id)} className="text-sm text-red-500">Remove</button>
</div>
<p className="text-sm text-gray-600">${item.price}</p>
<div className="mt-2 flex items-center gap-2">
<input type="number" min="1" value={item.qty} onChange={(e)=> onUpdate(item.id, Number(e.target.value))} className="w-20 p-1 border rounded" />
</div>
</div>
</div>
)
}
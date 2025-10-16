import React from 'react'


export default function Filters({ categories, active, onChange }){
return (
<div className="mb-4 flex gap-2 flex-wrap">
<button onClick={() => onChange('')} className={`px-3 py-1 rounded ${active === '' ? 'bg-indigo-600 text-white' : 'bg-white'}`}>All</button>
{categories.map(c => (
<button key={c} onClick={() => onChange(c)} className={`px-3 py-1 rounded ${active === c ? 'bg-indigo-600 text-white' : 'bg-white'}`}>{c}</button>
))}
</div>
)
}
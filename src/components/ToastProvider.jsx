import React, { createContext, useContext, useState } from 'react'


const ToastContext = createContext()


export default function ToastProvider({ children }){
const [toasts, setToasts] = useState([])
function push(message){
const id = Date.now()
setToasts(t => [...t, { id, message }])
setTimeout(()=> setToasts(t => t.filter(x=> x.id !== id)), 3000)
}
return (
<ToastContext.Provider value={{ push }}>
{children}
<div className="fixed bottom-6 right-6 flex flex-col gap-2">
{toasts.map(t => (
<div key={t.id} className="bg-black text-white px-4 py-2 rounded shadow">{t.message}</div>
))}
</div>
</ToastContext.Provider>
)
}
export function useToast(){ return useContext(ToastContext) }
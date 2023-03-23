import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/CartContext'
import { AdminContextProvider } from './context/AdminContext'
import { RouterProvider } from 'react-router-dom'
import router from "./router/Router"
import './css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AdminContextProvider>
    <CartProvider>
      <RouterProvider router={router} />    
    </CartProvider>
  </AdminContextProvider>
)

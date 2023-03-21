import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cart from './pages/cart'
import { CartProvider } from './context/CartContext'
import { RouterProvider } from 'react-router-dom'
import router from "./router/Router"
import './css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />    
  </CartProvider>,
)

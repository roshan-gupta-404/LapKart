import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ProductDetails from './Components/ProductDetail/ProductDetails.jsx'
import ProductList from './Components/ProductList/ProductList.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      // {
      //   path:'/',
      //   element:<Home/>,
      // },
      // {
      //   path:'/',
      //   element:<ProductDetails/>,
      // },
      {
        path:'/',
        element:<ProductList/>,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

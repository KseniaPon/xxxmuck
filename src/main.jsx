import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { ProductPage } from './components/ProductPage/index.jsx'
import { ProductPicker } from './components/ProductPicker/index.jsx';


const router = createBrowserRouter([
  {
    path: '/xxxmuck',
    element: <App />,
    
    children: [
      {
        path: '/xxxmuck',
        element: <ProductPicker />,
      },
      {
        path: '/xxxmuck/product/:id',
        element: < ProductPage/>,
      }
    ]
  },
  {
    basename: "/xxxmuck" // name of github repository
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

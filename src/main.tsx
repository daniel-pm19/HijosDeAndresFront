import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css';


import Register from './pages/Register';
import Login from './pages/Login'; 

// 3. Define tus rutas
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Login />, 
  },
  {
    path: "/register", 
    element: <Register />,
  },
]);

// 4. Renderiza el Router
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
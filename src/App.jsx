import React from 'react'
import AppRoutes from './route/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const API='https://659908faa20d3dc41cef2d1c.mockapi.io/axios'
function App() {
  let route=createBrowserRouter(AppRoutes)
  return <>
     <RouterProvider router={route}  />
  </>
}

export default App

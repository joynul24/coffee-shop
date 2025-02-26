import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './COMPONENTS/ErrorPage.jsx'
import MainLayout from './MainLayout/MainLayout.jsx'
import AddCoffee from './COMPONENTS/AddCoffee.jsx'
import AvailableCoffee from './COMPONENTS/AvailableCoffee.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        
      }
    ]
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/availableCoffee',
    element: <AvailableCoffee></AvailableCoffee>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

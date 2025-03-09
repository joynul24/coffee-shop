import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./COMPONENTS/ErrorPage.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import AddCoffee from "./COMPONENTS/AddCoffee.jsx";
import AvailableCoffee from "./COMPONENTS/AvailableCoffee.jsx";
import UpdateCoffee from "./COMPONENTS/UpdateCoffee.jsx";
import CoffeeDetails from "./COMPONENTS/CoffeeDetails.jsx";
import SignUp from "./COMPONENTS/SignUp.jsx";
import Login from "./COMPONENTS/Login.jsx";
import AuthProvider from "./COMPONENTS/provider/AuthProvider.jsx";
import Users from "./COMPONENTS/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("http://localhost:5000/coffees"),
    children: [{}],
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path: "/availableCoffee",
    element: <AvailableCoffee></AvailableCoffee>,
  },
  {
    path: "/coffeeDetails/:id",
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    // loader: () => fetch("http://localhost:5000/users"),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

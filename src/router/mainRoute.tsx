import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register"
import Login from "../pages/auth/Login"
// import SignIn from "../pages/auth/SignIn"

export const mainRouter = createBrowserRouter([
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "Login",
        element: <Login/>
    },
])
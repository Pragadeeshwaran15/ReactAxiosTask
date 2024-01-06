import React from 'react'
import Home from '../component/Home'
import Edit from "../component/Edit"
import Create from '../component/Create'
import { Navigate } from 'react-router-dom'


const AppRoutes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/create",
        element:<Create/>
    },
    {
        path:"/edit/:id",
        element:<Edit/>
    },
    {
        path:"*",
        element:<Navigate to="/"/>
    },
]

export default AppRoutes

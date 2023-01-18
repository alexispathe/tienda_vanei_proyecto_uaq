import Login from "../components/user-components/Login";
import { Register } from "../components/user-components/Register";
export const UserRoutes =[
    {
        element: <Login/>,
        path: '/login'
    },
    {
        element: <Register/>,
        path: '/register'
    }
];
import Login from "../components/user-components/Login";
import { Register } from "../components/user-components/Register";
import { Profile } from "../components/user-components/Profile";
export const UserRoutes =[
    {
        element: <Login/>,
        path: '/login'
    },
    {
        element: <Register/>,
        path: '/register'
    },
    {
        element: <Profile/>,
        path: '/perfil'
    }
];
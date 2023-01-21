import { AcercaDe } from "../components/section-components/AcercaDe";
import { ProductsContainer } from "../components/section-components/ProductsContainer";
import { Search } from "../components/section-components/Search";
import { ShoppingCart } from "../components/section-components/ShoppingCart"
import { Home } from "../components/utils/Home";
export const Section =[
    {
        element: <ShoppingCart/>,
        path: "/cart"
    },
    {
        element: <Home/>,
        path: '/'
    },
    {
        element: <ProductsContainer/>,
        path: '/articulos/:id'
    },
    {
        element: <Search/>,
        path: 'search?'
    },
    {
        element: <AcercaDe/>,
        path: '/acerca_de_nosotros'
    },
    {
        element: <Home/>,
        path: '/tienda_vanei_proyecto_uaq/'
    }
];
// useContext nos permite acceder a la informacion que se encuentra en el contexto de nuestra aplicacion

import React, { useState,useContext } from "react";
const productContext = React.createContext();
const productToggleContext = React.createContext();

export function useProductContext(){
    return useContext(productContext);
};
export function useProductToggleContext(){
    return useContext(productToggleContext);
};  

export const ProductsProvider = ({children}) => {
    const [product, setProducts] = useState([])
    const onProduct = (value) => {
        // console.log(value)
        setProducts([...product, value])
        console.log("Productos", product)
    }
    return (
        <productContext.Provider value={product}>
            <productToggleContext.Provider value={onProduct}>
                {children}
            </productToggleContext.Provider>
        </productContext.Provider>
    );
}
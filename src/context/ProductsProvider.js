// useContext nos permite acceder a la informacion que se encuentra en el contexto de nuestra aplicacion

import React, { useState, useContext } from "react";

const productContext = React.createContext();
const productToggleContext = React.createContext();
const deleteProductContext = React.createContext();
const totalPriceContext = React.createContext();
const btnTotalPriceContext = React.createContext();

// Esta funcion almacena los poductos añadidos al carrito
export function useProductContext() {
    return useContext(productContext);
};
// Esta funcion es para el boton onProduct 
export function useProductToggleContext() {
    return useContext(productToggleContext);
};
// Borrar un elemento que se encuentre en el contexto
export function useDeleteProductContext() {
    return useContext(deleteProductContext)
}
export function useBntTotalPriceContext() {
    return useContext(btnTotalPriceContext)
}
export function useTotalPriceContext() {
    return useContext(totalPriceContext);
}




export const ProductsProvider = ({ children }) => {
    const [product, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const onProduct = (value) => {
        // console.log(product)
        setProducts([...product, value])
        // onTotalPrice(product);
        // console.log("Productos", product)
    }
    // Creamos la funcion que hara para borrar un el ID del producto
    const onDeleteProduct = (id) => {
        setProducts(product.filter(product => product.id !== id))
        // onTotalPrice(product.filter(product => product.id !== id));
    }
    // FIN
    const onTotalPrice = () => {
        let x = 0;
        product.map(data => {
            x += data.price
        });
        setTotal(x)

    }

    return (
        <productContext.Provider value={product}>
            <productToggleContext.Provider value={onProduct}>
                <deleteProductContext.Provider value={onDeleteProduct}>
                    <totalPriceContext.Provider value={total}>
                        <btnTotalPriceContext.Provider value={onTotalPrice}>
                            {children}

                        </btnTotalPriceContext.Provider>

                    </totalPriceContext.Provider>
                </deleteProductContext.Provider>
            </productToggleContext.Provider>
        </productContext.Provider>
    );
}
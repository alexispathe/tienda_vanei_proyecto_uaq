// useContext nos permite acceder a la informacion que se encuentra en el contexto de nuestra aplicacion

import React, { useState, useContext } from "react";

const productContext = React.createContext();
const productToggleContext = React.createContext();
const deleteProductContext = React.createContext();
const totalPriceContext = React.createContext();
const btnTotalPriceContext = React.createContext();
const btnDeleteProductsCart = React.createContext();
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
// FUNCION PARA BORRAR LOS PRODUCTOS DEL CARRITO DE COMRPAS UNA VEZ REALIZADO LA COMPRA
export function useDeleteProduct() {
    return useContext(btnDeleteProductsCart)
}



export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const onProduct = (value) => {
        // console.log(product)
        value.productID = value.title.toLowerCase().replace(/ /g,'-') +"-"+ new Date().getMilliseconds();
        
        setProducts([...products, value])
        // onTotalPrice(product);
        // console.log("Productos", product)
    }
    // Creamos la funcion que hara para borrar un el ID del producto
    const onDeleteProduct = (id) => {
        // console.log(products)
        setProducts(products.filter(product => product.productID !== id))
        
        // onTotalPrice(product.filter(product => product.id !== id));
    }
    // FIN
    // SACAR EL TOTAL DE LOS PRODUCTOS
    const onTotalPrice = () => {
        let x = 0;
        products.map(data => {
            x += data.price
        });
        setTotal(x)

    }
    // BOTON PARA BORRAR LOS PRODUCTOS CUANDO SE HACE LA COMPRA
    const onDeleteProducts = () => {
        setProducts([]);
    }
    return (
        <productContext.Provider value={products}>
            <productToggleContext.Provider value={onProduct}>
                <deleteProductContext.Provider value={onDeleteProduct}>
                    <totalPriceContext.Provider value={total}>
                        <btnTotalPriceContext.Provider value={onTotalPrice}>
                            <btnDeleteProductsCart.Provider value={onDeleteProducts}>
                                {children}
                            </btnDeleteProductsCart.Provider>

                        </btnTotalPriceContext.Provider>

                    </totalPriceContext.Provider>
                </deleteProductContext.Provider>
            </productToggleContext.Provider>
        </productContext.Provider>
    );
}
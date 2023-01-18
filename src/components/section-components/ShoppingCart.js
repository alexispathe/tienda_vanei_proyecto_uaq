import { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductsProvider";
import { ProductsDB } from "../../database/ProductsDB";

export const ShoppingCart = () => {
    const products = useProductContext();
    const [items, setItems] = useState([]);
    const getProducts = () => {
        const id = [2, 3, 6];
        const data = [];
        products.map((id) => {
            console.log(ProductsDB.filter(product => product.id === id))
            // setItems(...items, ProductsDB.filter(product => product.id === data));
            data.push(...ProductsDB.filter(product => product.id === id));

        })
        setItems(data)

    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            <div className="container">
                <h1>Carrito de compras</h1>
                <div className="items-container">
                    {items.map((product, i) => (
                        <div className="item">
                            <div className="item-title">{product.title}</div>
                            <div className="item-count">1</div>
                            <div className="item-price">{product.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
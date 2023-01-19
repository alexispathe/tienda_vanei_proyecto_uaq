import { useEffect, useState } from "react";
import { useProductContext,useDeleteProductContext , useTotalPriceContext} from "../../context/ProductsProvider";
import { ProductsDB } from "../../database/ProductsDB";
import {MdDeleteForever} from 'react-icons/md';
import '../../Styles/ShoppingCart.css';

export const ShoppingCart = () => {
    const products = useProductContext();
    const onDeleteProduct = useDeleteProductContext();
    const total = useTotalPriceContext();
    
    const [items, setItems] = useState([]);

    
    const getTotalPrice = async (data) => {
        // let x = 0;
        // data.map(data=>{
        //     x+= data.price
        //     setTotal(x)
        // });
        

    }
    // useEffect(() => {
    //     console.log(products)
    // }, []);
    return (
        <>
            <div className="">
                <div className="items-container  ">
                    <h1 className="text-center">Carrito de compras</h1>
                    {
                        products.map((product, i) => (
                            <div className="item" key={i}>
                                <div className="item-info">
                                    <div className="item-image"><img src={product.image} alt="" /></div>
                                    <div className="item-title ">{product.title}</div>
                                </div>

                                <div className="item-count ">1</div>
                                <div className="item-price ">${product.price} MXN  <MdDeleteForever onClick={()=>onDeleteProduct(product.id)} style={{"color": "red"}}/></div>
                            </div>
                        ))

                    }
                    <div className="total-container">
                        <p className="total"> Total ${total} MXN</p>
                    </div>
                </div>
            </div>
        </>
    )
}
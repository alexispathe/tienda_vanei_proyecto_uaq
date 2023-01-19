import { Product } from "./Products"
import { ProductsDB } from "../../database/ProductsDB";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    let {id} =  useParams();
    useEffect(()=>{
        if(id){
            const data = ProductsDB.filter(products => products.category === id)
            setProducts(data)
        }else{
            setProducts(ProductsDB);
        }
       
    },[id]);
    return (
        <>
            <div className="d-flex w-100 flex-wrap justify-content-center ">
                {products && products.length >=1 ?
                    products.map((product, i) => (
                        <Product
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            id={product}
                            key={product.id}
                            
                        />
                    ))
                    :<div className="alert alert-danger">No hay productos de esa categoria</div>

                }

            </div>

        </>
    )
}
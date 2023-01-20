import { Product } from "./Products"
import { ProductsDB } from "../../database/ProductsDB";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductsContainer = () => {
    const [productsDB, setProductsDB] = useState([]);
    let {id} =  useParams();
    useEffect(()=>{
        if(id){
            const data = ProductsDB.filter(products => products.category === id)
            setProductsDB(data)
        }else{
            setProductsDB(ProductsDB);
        }
       
    },[id]);
    return (
        <>
            <div className="d-flex w-100 flex-wrap justify-content-center ">
                {productsDB && productsDB.length >=1 ?
                    productsDB.map((product, i) => (
                        <Product
                            product={product}
                            key={product.id}
                            
                        />
                    ))
                    :<div className="alert alert-danger">No hay productos de esa categoria</div>

                }

            </div>

        </>
    )
}
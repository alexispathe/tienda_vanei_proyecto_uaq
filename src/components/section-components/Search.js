import {useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsDB } from "../../database/ProductsDB";
import { Product } from "./Products";
export const Search =()=>{
    let [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [searchID, setSearchID] = useState('');
    useEffect(()=>{
        setSearchID(searchParams.get('q'))
        getProducts(searchID)

    },[searchParams])
    const getProducts =(id)=>{
        const x = []
        for(let product of ProductsDB ){
            if(product.title.toLowerCase().search(id.toLowerCase()) >=0){
                x.push(product)
            }
        }
        setProducts(x);

    };
      
    return(
        <>
            <div className="container">
                {products && products.length >=1 && searchID.length >=1 ?<h1 className="text-center">Resultados de {searchID} </h1>:''}
                <div className="d-flex w-100 flex-wrap justify-content-center ">
                {products && products.length >=1 && searchID.length >=1 ?
                    products.map((product, i) => (
                        <Product
                            product={product}
                            key={product.id}
                            
                        />
                    ))
                    :<div className="alert alert-danger mt-5">¡No se encontro ningun resultado!</div>

                }

            </div>

            </div>
        </>
    )
};
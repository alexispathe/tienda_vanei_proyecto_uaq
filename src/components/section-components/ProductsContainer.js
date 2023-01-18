import { Product } from "./Products"
import { ProductsDB } from "../../database/ProductsDB";

export const ProductsContainer = () => {
    
    return (
        <>
            <div className="d-flex w-100 flex-wrap justify-content-center ">
                {
                    ProductsDB.map((product, i) => (
                        <Product
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            id={product.id}
                            key={product.id}
                            
                        />
                    ))

                }

            </div>

        </>
    )
}
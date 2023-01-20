
import { BsCartPlus } from 'react-icons/bs';
import { TfiPackage } from 'react-icons/tfi';
import '../../Styles/Product.css';

import { useProductContext, useProductToggleContext } from "../../context/ProductsProvider";

export const Product = ({product}) => {
    const onProduct = useProductToggleContext();
    return (
        <>
            <div className="product-container">
                <div className="product">
                    <div className="card" style={{ "width": "18rem" }}>
                        {/* <Link to={"/articulo/"+product.id}> */}
                            <img className="card-img-top" src={product.image} alt="Card image cap" />
                        {/* </Link> */}
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">${product.price} MXN + Envio gratis <TfiPackage /></p>
                            <div className="btn btn-outline-primary" style={{ "float": "right" }} onClick={()=>onProduct(product)} > Agregar <BsCartPlus /></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
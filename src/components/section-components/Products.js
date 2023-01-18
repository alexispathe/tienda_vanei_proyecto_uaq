import { Link } from "react-router-dom";
import { BsCartPlus } from 'react-icons/bs';
import { TfiPackage } from 'react-icons/tfi';
import '../../Styles/Product.css';

import { useProductContext, useProductToggleContext } from "../../context/ProductsProvider";

export const Product = ({title, price, image, id}) => {
    const productC = useProductContext();
    const onProduct = useProductToggleContext();
    return (
        <>
            <div className="product-container">
                <div className="product">
                    <div className="card" style={{ "width": "18rem" }}>
                        <Link to={"/articulo/"+id}>
                            <img className="card-img-top" src={image} alt="Card image cap" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">${price} MXN + Envio gratis <TfiPackage /></p>
                            <div className="btn btn-outline-primary" style={{ "float": "right" }} onClick={()=>onProduct(id)} > Agregar <BsCartPlus /></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
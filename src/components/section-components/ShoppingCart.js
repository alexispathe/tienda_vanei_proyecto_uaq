import { useEffect} from "react";
import { useProductContext, useDeleteProductContext, useTotalPriceContext, useBntTotalPriceContext } from "../../context/ProductsProvider";
import { MdDeleteForever } from 'react-icons/md';
import { Link } from "react-router-dom";
import '../../Styles/ShoppingCart.css';

export const ShoppingCart = () => {
    const products = useProductContext();
    const onDeleteProduct = useDeleteProductContext();
    const onBtnTotalPrice = useBntTotalPriceContext();
    const total = useTotalPriceContext();

    useEffect(() => {
        onBtnTotalPrice();
    }, [onDeleteProduct]);
    return (
        <>
            <div className="">
                {total > 0 ? <div className="items-container  ">
                    <h1 className="text-center">Carrito de compras</h1>
                    {
                        products.map((product, i) => (
                            <div className="item" key={i}>
                                <div className="item-info">
                                    <div className="item-image"><img src={product.image} alt="" /></div>
                                    <div className="item-title ">{product.title}</div>
                                </div>

                                <div className="item-count ">1</div>
                                <div className="item-price ">${product.price} MXN  <MdDeleteForever onClick={() => onDeleteProduct(product.id)} style={{ "color": "red" }} /></div>
                            </div>
                        ))

                    }
                    <div className="total-container">
                        <div className="total">
                            <div>
                                <span className=""> Total ${total} MXN</span>
                            </div>
                            <div>
                                <Link className="btn btn-success">Comprar</Link>
                            </div>
                        </div>

                    </div>
                </div> : 
                <div className="alert alert-danger text-center">No has agregado ningun producto</div>

                }

            </div>
        </>
    )
}
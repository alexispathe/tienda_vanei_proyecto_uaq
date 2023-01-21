import { useEffect, useState } from "react";
import { useProductContext, useDeleteProductContext, useTotalPriceContext, useBntTotalPriceContext } from "../../context/ProductsProvider";
import { MdDeleteForever } from 'react-icons/md';
import { Buy } from "./Buy";
import '../../Styles/ShoppingCart.css';
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
    let products = useProductContext();
    // BORRAR DUPLICADOR
    let hash = {};
    products = products.filter(function (current) {
        let exists = !hash[current.id];
        // console.log(exists)
        hash[current.id] = true;
        // Si exists da false significa que ese producto ya fue agregado antes entonces le agregamos un +1 para decir en su cantidad
        if (exists === false) {
            if (!current.items) { //si en la cantidad no hay nada entonces agregamos un +1
                current.items = 1
            } else {
                current.items += 1
            }
        } else {
            current.items = 1
        }
        return exists;
    });
    // FIN
    const onDeleteProduct = useDeleteProductContext();
    const onBtnTotalPrice = useBntTotalPriceContext();
    const total = useTotalPriceContext();
    const [status, setStatus] = useState(false);

    useEffect(() => {
        onBtnTotalPrice();
    }, [onDeleteProduct]);
    return (
        <>
            <div className="">
                {total && total > 0 ? <div className="items-container  ">
                    <h1 className="text-center">Carrito de compras</h1>
                    <div className="info-product">
                        <div>Producto</div>
                        <div>Cantidad</div>
                        <div>Precio</div>
                    </div>
                    {
                        products.map((product, i) => (
                            <div className="item" key={i}>
                                <div className="item-info">
                                    <div className="item-image"><img src={product.image} alt="" /></div>
                                    <div className="item-title ">{product.title}</div>
                                </div>

                                <div className="item-count ">{product.items}</div>
                                <div className="item-price ">${product.price} C/U <MdDeleteForever onClick={() => onDeleteProduct(product.productID)} style={{ "color": "red" }} /></div>
                            </div>
                        ))

                    }
                    <Buy setStatus={setStatus} />
                </div> : ''
                }
                {total <= 0 && status === false ? <div className="alert alert-danger text-center">No has agregado ningun producto</div> : ''}
                {/* MENSAJE CUANDO SE COMPRE UN PRODUCTO */}
                {status ? <div className='alert alert-success text-center'>Compra realizada correctamente <Link to="/perfil">Ver mis pedidos</Link></div> : ''}
                {/* FIN */}

            </div>
        </>
    )
}
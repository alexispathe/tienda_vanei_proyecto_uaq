import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useProductContext, useTotalPriceContext, useDeleteProduct } from '../../context/ProductsProvider';
export const Buy = ({ setStatus }) => {
    const total = useTotalPriceContext();
    const products = useProductContext();
    const deleteProducts = useDeleteProduct();
    const [alert, setAlert] = useState(false);
    const buyProduct = () => {
        // VALIDAR QUE EL USUARIO HAYA INICIADO SESION PARA REALIZAR LA COMPRA
        if (localStorage.getItem('login') && localStorage.getItem('login') === "true") {
            setStatus(true);
            deleteProducts();
            if (localStorage.getItem('products')) {
                const getProductsLocalStorage = JSON.parse(localStorage.getItem('products'));
                getProductsLocalStorage.push(...products);
                localStorage.setItem('products', JSON.stringify(getProductsLocalStorage))
            } else {
                localStorage.setItem('products', JSON.stringify(products));

            }
        }else{
           setAlert(true);
        }

    }

    return (
        <>
            <div className="total-container">
                {alert ? <div className='alert alert-warning text-center'>Para realizar una compra primero debes de <Link to="/login">Iniciar sesión</Link></div>: ''}

                <div className="total">
                    <div>
                        <span className=""> Total ${total} MXN</span>
                    </div>
                    <div>
                        <Link className="btn btn-success" onClick={buyProduct}>Comprar</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
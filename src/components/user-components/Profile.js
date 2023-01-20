import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('login') === "true") {
            setProducts(JSON.parse(localStorage.getItem('products')))
        } else {
            navigate('/login');
        }
    }, []);
    return (
        <>
            <div className="container">
                <h1 className="text-center">Perfil</h1>
                {products && products.length >= 1 ?
                    <div>
                        <p className="text-success">Comrpas realizadas</p>
                        <div className="d-flex flex-wrap w-100 justify-content-center">
                            {products.map((product, i) => (
                                <div className="card m-2 " style={{ "width": "14em" }} key={i}>
                                    <img className="card-img-top" src={product.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">{product.title}</p>
                                    </div>
                                </div>
                            ))

                            }

                        </div>

                    </div>
                    : <p className="text-danger">No has realizado ninguna compra</p>}


            </div>
        </>
    )
}
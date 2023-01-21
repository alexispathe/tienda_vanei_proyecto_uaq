import { Link } from 'react-router-dom';
import '../../Styles/Header.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import { useProductContext } from '../../context/ProductsProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo  from '../../images/logo_vanei_2.png';
const Header = () => {
    const quantityProducts = useProductContext();
    const navigate = useNavigate();
    const [statusUser, setStatusUser] = useState(false);
    const logout =()=>{
        localStorage.removeItem('login');
        window.location.href="/tienda_vanei_proyecto_uaq/";
    }
    useEffect(() => {
        if (localStorage.getItem('login') === "true") {
            setStatusUser(true);
        }
    })

    const search = (value) => {
        navigate('search?q=' + value)
    }
    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="h-top">
                        <div className="h-logo">
                            <Link to="/">
                                <img src={logo} alt="logo VANEI" />
                            </Link>
                        </div>
                        <div className="h-search">
                            <input type="search" name="search" placeholder="Buscar articulo..." onChange={(e) => search(e.target.value)} />
                        </div>
                        <div className="h-options">
                           

                            <div className="h-cart">
                                <div className='h-cart-icon'>
                                    <Link to="/cart"><AiOutlineShoppingCart />{quantityProducts.length >= 1 ? quantityProducts.length : ''}</Link>
                                </div>
                            </div>
                            {statusUser ? <div className='h-login-container'><div className="h-login"><Link to="/perfil">Perfil</Link></div> <div><BiLogOut onClick={logout} style={{"cursor": "pointer"}}/></div></div> : <div className="h-login"><Link to="/login">Iniciar sesion</Link></div>

}
                        </div>
                    </div>
                    <div className="h-down">
                        <div className='h-section'><Link to="/articulos/accesorios">Accesorios</Link></div>
                        <div className='h-section'><Link to="/articulos/figuras">Figuras</Link></div>
                        <div className='h-section'><Link to="/articulos/gorras">Gorras</Link></div>
                        <div className='h-section'><Link to="/articulos/playeras">Playeras</Link></div>
                        <div className='h-section'><Link to="/acerca_de_nosotros">Acerca de nosotros</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
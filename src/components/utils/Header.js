import { Link } from 'react-router-dom';
import '../../Styles/Header.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {useProductContext} from '../../context/ProductsProvider';
import {useNavigate} from 'react-router-dom'
const Header = () => {
    const quantityProducts = useProductContext();
    const navigate = useNavigate();
    const search=(value)=>{
        navigate('search?q='+value)
    }   
    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="h-top">
                        <div className="h-logo">
                            <Link to="/">
                                <img src="https://w7.pngwing.com/pngs/35/851/png-transparent-graffiti-illustration-text-sticker-graphic-design-alexis-ren-text-logo-sticker.png" alt="logo VANEI" />
                            </Link>
                        </div>
                        <div className="h-search">
                            <input type="search" name="search" placeholder="Buscar articulo..."  onChange={(e) => search(e.target.value)}/>
                        </div>
                        <div className="h-options">
                            <div className="h-login">
                                <Link to="/login">Iniciar sesion</Link>
                            </div>
                            <div className="h-cart">
                                <div className='h-cart-icon'>
                                    <Link to="/cart"><AiOutlineShoppingCart />{quantityProducts.length>=1 ? quantityProducts.length: ''}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-down">
                        <div className='h-section'><Link to="/articulos/accesorios">Accesorios</Link></div>
                        <div className='h-section'><Link to="/articulos/figuras">Figuras</Link></div>
                        <div className='h-section'><Link to="/articulos/gorras">Gorras</Link></div>
                        <div className='h-section'><Link to="/articulos/playeras">Playeras</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
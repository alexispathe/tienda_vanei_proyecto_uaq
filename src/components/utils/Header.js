import { Link } from 'react-router-dom';
import '../../Styles/Header.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="h-top">
                        <div className="h-logo">
                            <img src="https://w7.pngwing.com/pngs/35/851/png-transparent-graffiti-illustration-text-sticker-graphic-design-alexis-ren-text-logo-sticker.png" alt="logo VANEI" />
                        </div>
                        <div className="h-search">
                            <input type="search" name="search" placeholder="Buscar articulo..." />
                        </div>
                        <div className="h-options">
                            <div className="h-login">
                                <Link to="/login">Iniciar sesion</Link>
                            </div>
                            <div className="h-cart">
                                <div className='h-cart-icon'>
                                   <Link to="/cart"><AiOutlineShoppingCart /></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-down">
                        <div className='h-section'><Link>Accesorios</Link></div>
                        <div className='h-section'><Link>Figuras</Link></div>
                        <div className='h-section'><Link>Gorras</Link></div>
                        <div className='h-section'><Link>Playeras</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
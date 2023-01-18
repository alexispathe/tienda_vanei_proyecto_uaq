import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="login-container w-50 m-auto">
                    <form className="form-container ">
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <span className="input-group-text h-100"  ><AiOutlineMail /></span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Escribe tu correo" required />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <span className="input-group-text h-100" ><RiLockPasswordLine /></span>
                            </div>
                            <input type="email" className="form-control" name="password" placeholder="Escribe tu contraseña" required />
                        </div>
                        <div className='d-flex justify-content-between '>
                            <div className='ml-4'><Link to="/register"> Crear cuenta </Link></div>
                            <div className='btn-submit-container' >
                                <input type="submit" className="btn btn-primary float-right" value="Iniciar sesión" />
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import {AiOutlineUser} from 'react-icons/ai';
import {Link,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
export const Register =()=>{
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [status, setStatus] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('login') === "true") {
            navigate('/perfil')
        } 
    }, []);
    const onHandleChange =(e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(data));
        setStatus(true)
        e.target.name.value ="";
        e.target.email.value = "";
        e.target.password.value = "";
    }
    return(
        <>
            <div className="container mt-5">
                <div className="login-container w-50 m-auto">
                    <form className="form-container " onSubmit={onSubmit}>
                    <div className="input-group mb-3">
                            <div className="input-group-append">
                                <span className="input-group-text h-100"  ><AiOutlineUser /></span>
                            </div>
                            <input type="text" className="form-control" name="name" placeholder="Escribe tu nombre" required onChange={(e)=> onHandleChange(e)} />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <span className="input-group-text h-100"  ><AiOutlineMail /></span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Escribe tu correo" required  onChange={(e)=> onHandleChange(e)}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <span className="input-group-text h-100" ><RiLockPasswordLine /></span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Escribe tu contraseña" required onChange={(e)=> onHandleChange(e)} />
                        </div>
                        {status ? <div className='alert alert-success text-center'>Cuenta creada correctamente <Link to="/login">Iniciar sesión</Link></div>:''}

                        <div className='d-flex justify-content-between '>

                            <div className='ml-4'><Link to="/login"> Iniciar Sesión </Link></div>
                            <div className='btn-submit-container' >
                                <input type="submit" className="btn btn-primary float-right" value="Crear cuenta" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
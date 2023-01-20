import { useState,useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link,useNavigate } from 'react-router-dom';
const Login = () => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('login') === "true") {
            navigate('/perfil')
        } 
    }, []);
    const onChange =(e)=>{   
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };
    const onSubmit =(e)=>{
        e.preventDefault();
        if(localStorage.getItem('user')){
            const userDB = JSON.parse(localStorage.getItem('user'));
            // console.log(userDB)
            if(userDB.email=== data.email && userDB.password === data.password){
                e.target.email.value="";
                e.target.password.value ="";
                localStorage.setItem('login', true);
                navigate('/perfil');
            }else{
                setStatus(true)
            }
        }else{
            setStatus(true)
        }
        
    }
    return (
        <>
            <div className="container mt-5">
                <div className="login-container w-50 m-auto">
                    <form className="form-container " onSubmit={onSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <span className="input-group-text h-100"  ><AiOutlineMail /></span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Escribe tu correo" required  onChange={(e)=>onChange(e)}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <span className="input-group-text h-100" ><RiLockPasswordLine /></span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Escribe tu contraseña" required onChange={(e)=>onChange(e)} />
                        </div>
                        {status ? <div className='alert alert-danger text-center'>Correo o contraseña incorrecta</div>: ''}
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
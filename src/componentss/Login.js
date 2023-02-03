import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const login =()=>{
        localStorage.setItem('login', true);
    }
 
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if(login)
        {
            navigate('/')
        }
    });
    return (
        <>
            <h1>Login Here</h1>
            <input type="text"></input><br/>
            <input type="password"></input><br/><br/>
            <button onClick={login}>Login</button>
        </>
    )
}

export default Login;
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    function handleSubmit(){
        navigate('/producedetails')
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;

import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

const navigate = useNavigate();

const handleLogin = () => {

setIsLoggedIn(true);

navigate("/dashboard");

};

return (

<div className="login-container">

<h2>Login</h2>

<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />

<button onClick={handleLogin}>
Login
</button>

</div>

);

}

export default Login;
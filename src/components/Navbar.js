import { Link, useNavigate } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
function Navbar({ isLoggedIn, setIsLoggedIn }) {

const navigate = useNavigate();

const handleLogout = () => {
setIsLoggedIn(false);
navigate("/");
};

/* navigate to section */
const goToSection = (section) => {
navigate("/", { state: { scrollTo: section } });
};

return (

<nav className="navbar">

<div className="logo">
<FaStethoscope className="logo-icon" />
CardioCare
</div>

<ul className="nav-links">

<li>
<button onClick={() => goToSection("home")}>Home</button>
</li>

<li>
<button onClick={() => goToSection("about")}>About</button>
</li>

<li>
<button onClick={() => goToSection("faq")}>FAQ</button>
</li>

<li>
<Link to="/precautions">Precautions</Link>
</li>

<li>
<button onClick={() => goToSection("contact")}>Contact</button>
</li>

</ul>

<div className="nav-auth">

{isLoggedIn ? (

<button onClick={handleLogout}>Logout</button>

) : (

<Link to="/login">
<button>Login</button>
</Link>

)}

</div>

</nav>

);

}

export default Navbar;
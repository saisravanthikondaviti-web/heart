import { Link, useNavigate } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
import { useState } from "react";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const goToSection = (section) => {
    navigate("/", { state: { scrollTo: section } });
    setMenuActive(false); // close menu on click
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FaStethoscope className="logo-icon" />
        CardioCare
      </div>

      {/* Hamburger for mobile */}
      <div
        className={`hamburger ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
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
          <Link to="/login" onClick={() => setMenuActive(false)}>
            Precautions
          </Link>
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
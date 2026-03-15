import { Link } from "react-router-dom";
import "../App.css";

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

{/* ABOUT */}

<div className="footer-section">

<h3>CardioCare</h3>

<p>
AI-powered heart disease prediction system designed
to assist early risk detection and promote better heart health.
</p>

</div>

{/* QUICK LINKS */}

<div className="footer-section">

<h3>Quick Links</h3>

<ul>

<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#faq">FAQ</a></li>
<li><Link to="/precautions">Precautions</Link></li>
<li><a href="#contact">Contact</a></li>

</ul>

</div>

{/* CONTACT */}

<div className="footer-section">

<h3>Contact</h3>

<p>Email: cardioinsight@gmail.com</p>
<p>Phone: +91 9876543210</p>
<p>Location: India</p>

</div>

</div>

{/* BOTTOM BAR */}

<div className="footer-bottom">

<p>© 2026 CardioCare | All Rights Reserved</p>

</div>

</footer>

)

}

export default Footer
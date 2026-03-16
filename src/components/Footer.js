import { Link } from "react-router-dom";
import "../App.css";
function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* ABOUT */}

                <div className="footer-section">

                    <h3>CardioCare</h3>

                    <p>
                         Heart disease prediction system designed
                        to assist early risk detection and promote better heart health through personalized risk assessments.
                    </p>

                </div>

                {/* QUICK LINKS */}

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>

                        <li><Link to="/#home">Home</Link></li>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/#faq">FAQ</Link></li>
                        <li><Link to="/login">Precautions</Link></li>
                        <li><Link to="/#contact">Contact</Link></li>
                    </ul>

                </div>

                {/* CONTACT */}

                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>Email: cardiocare@gmail.com</p>
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
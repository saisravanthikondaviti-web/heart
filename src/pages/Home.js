import "../App.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const location = useLocation();

  useEffect(() => {
    // ✅ Case 1: Handle state-based navigation
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    // ✅ Case 2: Handle URL hash (#about, #faq, etc.)
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay ensures DOM is ready
      }
    }
  }, [location]);

  return (
    <div>

      {/* HERO SECTION */}
      <section id="home" className="hero">

        <div className="bubbles">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        <h1>CardioCare</h1>

        <p>AI Powered Heart Disease Prediction System</p>

        {/* ✅ FIXED: use Link instead of <a> */}
        <a href="/login">
          <button className="hero-btn">Start Prediction</button>
        </a>

      </section>


      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">

        <h2>About CardioCare</h2>

        <div className="about-content">

          <div className="about-card">
            <h3>AI Powered Diagnosis</h3>
            <p>
              Our system uses machine learning models trained on clinical
              datasets to analyze patient data and predict the risk of heart disease.
            </p>
          </div>

          <div className="about-card">
            <h3>Early Risk Detection</h3>
            <p>
              The goal of this application is to help detect potential heart disease
              risks early and encourage preventive healthcare.
            </p>
          </div>

          <div className="about-card">
            <h3>Medical Insights</h3>
            <p>
              After prediction, the system provides useful health precautions
              to improve heart health and lifestyle.
            </p>
          </div>

        </div>
      </section>


      {/* FAQ SECTION */}
      <section id="faq" className="section faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>How accurate is the prediction?</h3>
          <p>
            The machine learning model is trained using publicly available
            heart disease datasets and provides high accuracy predictions.
          </p>
        </div>

        <div className="faq-item">
          <h3>Is this a replacement for doctors?</h3>
          <p>
            No. This system is designed for early risk assessment only and
            does not replace professional medical advice.
          </p>
        </div>

        <div className="faq-item">
          <h3>Is my health data stored?</h3>
          <p>
            No personal data is stored permanently. It is only used for
            temporary prediction analysis.
          </p>
        </div>

      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">

        <h2>Contact Us</h2>

        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />

          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </section>

    </div>
  );
}

export default Home;
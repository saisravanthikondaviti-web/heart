import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

function Precautions() {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("heartResult");
    if (stored) {
      setData(JSON.parse(stored));
    } else if (location.state) {
      setData(location.state);
      localStorage.setItem("heartResult", JSON.stringify(location.state));
    }
  }, [location.state]);

  if (!data) return <p>Loading...</p>;

  const risk = data.risk_level || "Unknown";
  const disease = data.disease_type || "Not Available";

  let riskScore = 30;
  if (risk === "Medium Risk") riskScore = 60;
  if (risk === "High Risk") riskScore = 90;

  // Images for each section
  const images = {
    precautions:
      "https://img.freepik.com/premium-vector/warning-exclamation-mark-triangle-sign-beware-danger-security-risk-symbol-caution-attention-alert-precaution-signal-flat-graphic-vector-illustration-isolated-white-background_198278-24620.jpg",
    diet:
      "https://media.istockphoto.com/id/1062342358/vector/vegetables-and-fruits-character-collection.jpg?s=612x612&w=0&k=20&c=gghdLY3ckVGYo3OQ9NwcolS9sWAWhts8lXpEJzZdVlI=",
    exercise:
      "https://img.freepik.com/free-vector/cute-woman-workout-with-dumbell-fitness-ball-cartoon-vector-icon-illustration-people-sport-icon_138676-6661.jpg?semt=ais_hybrid&w=740&q=80",
    medical:
      "https://static.vecteezy.com/system/resources/previews/072/230/285/non_2x/cute-cartoon-doctor-character-giving-medical-advice-vector.jpg"
  };

  // Common section component
  const Section = ({ title, items, img }) => (
    <div className="report-section flex-row">
      <div className="text-left">
        <h2>{title}</h2>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="image-right">
        <img src={img} alt={title} />
      </div>
    </div>
  );

  return (
    <div className="precautions-page">
      <h1>Heart Health Report</h1>

      <div className="report-card">
        <h2>Prediction Result</h2>
        <p><b>Risk Level:</b> {risk}</p>
        <p><b>Disease Type:</b> {disease}</p>
      </div>

      <div className="risk-meter">
        <h2>AI Risk Meter</h2>
        <div className="meter">
          <div className="meter-fill" style={{ width: `${riskScore}%` }}></div>
        </div>
        <p>{risk}</p>
      </div>

      <Section title="General Precautions" items={data.precautions} img={images.precautions} />
      <Section title="Diet Recommendations" items={data.diet} img={images.diet} />
      <Section title="Exercise Plan" items={data.exercise} img={images.exercise} />
      <Section title="Medical Advice" items={data.medical} img={images.medical} />
    </div>
  );
}

export default Precautions;
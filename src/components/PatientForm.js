import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { predictHeart } from "../services/api";
import "../App.css";

function PatientForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    thalach: "",
    exang: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await predictHeart(form);
      console.log("API RESPONSE:", res.data);

      setResult(res.data);

      // save result so Precautions page can read
      localStorage.setItem("heartResult", JSON.stringify(res.data));
    } catch (err) {
      console.log("Prediction error:", err);
    }
  };

  return (
    <div className="form-container">
      <h2>Heart Disease Prediction</h2>

      <form className="patient-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Patient Name" onChange={handleChange} required />
        <input name="age" placeholder="Age" type="number" onChange={handleChange} required />
        <select name="sex" onChange={handleChange} required>
          <option value="">Sex</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
        <select name="cp" onChange={handleChange} required>
          <option value="">Chest Pain Type</option>
          <option value="0">Typical Angina</option>
          <option value="1">Atypical Angina</option>
          <option value="2">Non-Anginal Pain</option>
          <option value="3">Asymptomatic</option>
        </select>
        <input name="trestbps" placeholder="Resting Blood Pressure" type="number" onChange={handleChange} required />
        <input name="chol" placeholder="Cholesterol" type="number" onChange={handleChange} required />
        <input name="thalach" placeholder="Maximum Heart Rate" type="number" onChange={handleChange} required />
        <select name="exang" onChange={handleChange} required>
          <option value="">Exercise Induced Angina</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <button type="submit" className="predict-btn">Predict Heart Risk</button>
      </form>

      {/* Show only prediction result under the form */}
      {result && (
        <div className="result-box">
          <h3>Prediction: {result.prediction}</h3>
          <p><b>Risk Level:</b> {result.risk_level}</p>
          <p><b>Disease Type:</b> {result.disease_type}</p>

          {/* Optional risk meter */}
          <div className="risk-meter" style={{marginTop:"10px"}}>
            <div className="meter">
              <div
                className="meter-fill"
                style={{
                  width: result.risk_level === "High Risk" ? "90%" :
                         result.risk_level === "Medium Risk" ? "60%" : "30%",
                  backgroundColor: result.risk_level === "High Risk" ? "red" :
                                   result.risk_level === "Medium Risk" ? "orange" : "green"
                }}
              ></div>
            </div>
          </div>

          <button
            className="precautions-btn"
            onClick={() => navigate("/precautions")}
            style={{marginTop:"10px"}}
          >
            View Full Precautions Page
          </button>
        </div>
      )}
    </div>
  );
}

export default PatientForm;
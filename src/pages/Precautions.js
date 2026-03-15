import { useLocation } from "react-router-dom";
import "../App.css";

function Precautions() {

const location = useLocation();

/* read stored result */
const stored = localStorage.getItem("heartResult");
const data = stored ? JSON.parse(stored) : location.state || {};

const risk = data.risk_level || "Unknown";
const disease = data.disease_type || "Not Available";
const precautions = data.precautions || [];

let riskScore = 30;
if (risk === "Medium Risk") riskScore = 60;
if (risk === "High Risk") riskScore = 90;

/* Diet */
const diet = [
"Increase fruits and vegetables",
"Reduce cholesterol rich foods",
"Limit salt intake",
"Eat whole grains",
"Avoid processed food"
];

/* Exercise */
const exercise = [
"30 minutes walking daily",
"Yoga and breathing exercises",
"Light cardio workouts",
"Regular stretching"
];

/* Medical */
const medical = [
"Regular blood pressure monitoring",
"Check cholesterol levels",
"Consult cardiologist if symptoms occur",
"Follow prescribed medication"
];

/* Download report */
const downloadReport = () => {

const report = `
CardioInsight AI Health Report

Risk Level: ${risk}
Disease Type: ${disease}

Precautions:
${precautions.join("\n")}

Diet Advice:
${diet.join("\n")}

Exercise Plan:
${exercise.join("\n")}

Medical Advice:
${medical.join("\n")}
`;

const blob = new Blob([report], { type: "text/plain" });
const url = window.URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "Heart_Report.txt";
a.click();
};

return (

<div className="precautions-page">

<h1>Heart Health Report</h1>

<div className="report-card">
<h2>Prediction Result</h2>
<p><b>Risk Level:</b> {risk}</p>
<p><b>Disease Type:</b> {disease}</p>
</div>


{/* RISK METER */}
<div className="risk-meter">

<h2>AI Risk Meter</h2>

<div className="meter">
<div className="meter-fill" style={{width:`${riskScore}%`}}></div>
</div>

<p>{risk}</p>

</div>


{/* GENERAL PRECAUTIONS */}

<div className="report-section">

<div>
<h2>General Precautions</h2>
<ul>
{precautions.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>
</div>

<img
src="https://img.freepik.com/premium-vector/warning-exclamation-mark-triangle-sign-beware-danger-security-risk-symbol-caution-attention-alert-precaution-signal-flat-graphic-vector-illustration-isolated-white-background_198278-24620.jpg"
alt="general precautions"
className="section-img"
/>

</div>


{/* DIET */}

<div className="report-section">

<div>
<h2>Diet Recommendations</h2>
<ul>
{diet.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>
</div>

<img
src="https://media.istockphoto.com/id/1062342358/vector/vegetables-and-fruits-character-collection.jpg?s=612x612&w=0&k=20&c=gghdLY3ckVGYo3OQ9NwcolS9sWAWhts8lXpEJzZdVlI="
alt="healthy diet"
className="section-img"
/>

</div>


{/* EXERCISE */}

<div className="report-section">

<div>
<h2>Exercise Plan</h2>
<ul>
{exercise.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>
</div>

<img
src="https://img.freepik.com/free-vector/cute-woman-workout-with-dumbell-fitness-ball-cartoon-vector-icon-illustration-people-sport-icon_138676-6661.jpg?semt=ais_hybrid&w=740&q=80"
alt="exercise"
className="section-img"
/>

</div>


{/* MEDICAL */}

<div className="report-section">

<div>
<h2>Medical Advice</h2>
<ul>
{medical.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>
</div>

<img
src="https://static.vecteezy.com/system/resources/previews/072/230/285/non_2x/cute-cartoon-doctor-character-giving-medical-advice-vector.jpg"
alt="medical"
className="section-img"
/>

</div>


<button className="download-btn" onClick={downloadReport}>
Download Medical Report
</button>

</div>

);

}

export default Precautions;
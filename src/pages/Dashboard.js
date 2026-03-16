import PatientForm from "../components/PatientForm";
import "../App.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>❤️ CardioCare </h1>
        <p>Heart Disease Prediction System</p>
      </div>

      <div className="dashboard-card">
        <h2>Enter Patient Data</h2>
        <PatientForm />
      </div>

    </div>
  );
}

export default Dashboard;
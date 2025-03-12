import React, { useState } from "react";
import axios from "axios";
import './App.css';
const DiabetesPrediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    glucose: "",
    insulin: "",
    bmi: "",
    bloodPressure: "",
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        featureData: formData,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error fetching prediction", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Diabetes Prediction</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
        {Object.keys(formData).map((key) => (
          <div key={key} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={formData[key]}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          style={{ backgroundColor: "blue", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "lightgreen", display: "inline-block", borderRadius: "5px" }}>
          <p>{prediction === 1 ? "Diabetic" : "Non-Diabetic"}</p>
        </div>
      )}
    </div>
  );
};

export default DiabetesPrediction;

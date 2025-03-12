from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS)

# Load the trained model
model = joblib.load("./Diabetes.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json['featureData']
        df = pd.DataFrame([data])  # Convert input to DataFrame
        prediction = model.predict(df)
        return jsonify({'prediction': int(prediction[0])})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000, debug=True)

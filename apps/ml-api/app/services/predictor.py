import pandas as pd
from app.core.model_loader import model

def predict_single(data: dict):
    input_data = pd.DataFrame([data])
    prediction = model.predict(input_data)

    return prediction[0]

def predict_batch(data: list):
    input_data = pd.DataFrame(data)
    predictions = model.predict(input_data)

    return predictions.tolist()
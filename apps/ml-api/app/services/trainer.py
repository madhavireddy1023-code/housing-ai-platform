from pathlib import Path
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import (mean_squared_error, r2_score, mean_absolute_error)
import joblib

BASE_DIR = Path(__file__).resolve().parent.parent.parent
DATA_PATH = BASE_DIR / "datasets" / "House_Price_Dataset.csv"

MODEL_PATH = BASE_DIR / "saved_models" / "house_price_model.pkl"

def train_model():
    # Load data from csv
    df = pd.read_csv(DATA_PATH, sep=None, engine='python')
    print(df.head())

    # Preprocess data
    TARGET_COLUMN = 'price'
    X = df.drop(columns=[TARGET_COLUMN])
    y = df[TARGET_COLUMN]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    # Train model
    model = LinearRegression()

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    metrics = {
        "mae": float(mean_absolute_error(y_test, predictions)),
        "rmse": float(mean_squared_error(
            y_test,
            predictions
        ) ** 0.5),
        "r2_score": float(r2_score(y_test, predictions))
    }

    joblib.dump(
        {
            "model": model,
            "metrics": metrics,
            "features": list(X.columns)
        },
        MODEL_PATH
    )

    print("Model trained successfully")
    print(metrics)


if __name__ == "__main__":
    train_model()
from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent.parent.parent

MODEL_PATH = BASE_DIR / "saved_models" / "house_price_model.pkl"


model_data = joblib.load(MODEL_PATH)
model = model_data["model"]
metrics = model_data["metrics"]
features = model_data["features"]
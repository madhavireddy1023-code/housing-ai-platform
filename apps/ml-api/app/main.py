from fastapi import FastAPI

from app.api.predict import router as predict_router
from app.api.model_info import router as model_info_router
from app.api.health import router as health_router

app = FastAPI(
    title="Housing Price Prediction API",
    version="1.0.0"
)

app.include_router(predict_router)
app.include_router(model_info_router)
app.include_router(health_router)
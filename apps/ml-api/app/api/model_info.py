from fastapi import APIRouter
from app.core.model_loader import model, metrics, features

router = APIRouter()

@router.get("/model-info")
def get_model_info():
    return {
        'model_type': "Linear Regression",
        'model_description': "A simple linear regression model for predicting housing prices",
        'coefficients': model.coef_.tolist(),
        'intercept': model.intercept_,
        "metrics": metrics,
        "features": features
    }


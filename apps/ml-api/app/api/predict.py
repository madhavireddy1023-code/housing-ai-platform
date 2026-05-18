from fastapi import APIRouter, HTTPException

from app.models.schemas import HousingFeatures, BatchPredictionRequest
from app.services.predictor import predict_single, predict_batch

router = APIRouter()


@router.post("/predict")
def predict_single_endpoint(
    features: HousingFeatures
):
    try:
        data = {
            "square_footage": features.square_footage,
            "bedrooms": features.bedrooms,
            "bathrooms": features.bathrooms,
            "year_built": features.year_built,
            "lot_size": features.lot_size,
            "distance_to_city_center": features.distance_to_city_center,
            "school_rating": features.school_rating,
        }

        prediction = predict_single(data)

        return {
            "prediction": float(prediction)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/predict/batch")
def predict_batch_endpoint(
    request: BatchPredictionRequest
):
    try:
        data = [
            {
                "square_footage": prop.square_footage,
                "bedrooms": prop.bedrooms,
                "bathrooms": prop.bathrooms,
                "year_built": prop.year_built,
                "lot_size": prop.lot_size,
                "distance_to_city_center": prop.distance_to_city_center,
                "school_rating": prop.school_rating,
            }
            for prop in request.properties
        ]

        predictions = predict_batch(data)

        return {
            "predictions": [float(p) for p in predictions]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
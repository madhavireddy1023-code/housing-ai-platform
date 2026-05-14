from pydantic import BaseModel
from typing import List


class HousingFeatures(BaseModel):
    area: float
    bedrooms: int
    bathrooms: int
    stories: int
    parking: int


class BatchPredictionRequest(BaseModel):
    properties: List[HousingFeatures]
from fastapi import FastAPI

app = FastAPI(
     title="Housing Price Prediction API",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Housing Price Prediction API!"}
from fastapi import FastAPI
import pandas as pd
import autogluon.tabular as ag

app = FastAPI()

# โหลดโมเดลอัตโนมัติ
model_paths = {
    "building-1": "models/building-1",
    "building-2": "models/building-2",
    "building-3": "models/building-3",
    "building-4": "models/building-4",
    "building-5": "models/building-5",
    "building-6": "models/building-6",
}
models = {b: ag.TabularPredictor.load(p) for b, p in model_paths.items()}

@app.post("/predict")
def predict(data: dict):
    building_id = data.get("building_id")
    input_data = data.get("input_data")

    if building_id not in models:
        return {"error": "Invalid building ID"}

    df = pd.DataFrame([input_data])
    prediction = models[building_id].predict(df)
    return {"prediction": prediction.iloc[0]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)

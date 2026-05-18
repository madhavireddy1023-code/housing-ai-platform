import { useState } from "react";

function PropertyForm({
  setPrediction,
  setHistory,
  history,
  setLoading,
  setError,
}) {

  const [formData, setFormData] = useState({
    square_footage: "",
    bedrooms: "",
    bathrooms: "",
    year_built: "",
    lot_size: "",
    distance_to_city_center: "",
    school_rating: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.square_footage) {
      newErrors.square_footage = "Square footage is required.";
    }
    if (!formData.bedrooms) {
      newErrors.bedrooms = "Bedroom count is required.";
    }
    if (!formData.bathrooms) {
      newErrors.bathrooms = "Bathroom count is required.";
    }
    if (!formData.year_built) {
      newErrors.year_built = "Year built is required.";
    }
    if (!formData.lot_size) {
      newErrors.lot_size = "Lot size is required.";
    }
    if (!formData.distance_to_city_center) {
      newErrors.distance_to_city_center = "Distance to city center is required.";
    }
    if (!formData.school_rating) {
      newErrors.school_rating = "School rating is required.";
    }

    return newErrors;
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          square_footage: parseFloat(formData.square_footage),
          bedrooms: parseInt(formData.bedrooms, 10),
          bathrooms: parseFloat(formData.bathrooms),
          year_built: parseInt(formData.year_built, 10),
          lot_size: parseFloat(formData.lot_size),
          distance_to_city_center: parseFloat(formData.distance_to_city_center),
          school_rating: parseFloat(formData.school_rating),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Prediction request failed.");
      }

      setPrediction(data.prediction);
      setHistory([
        ...history,
        {
          ...formData,
          prediction: data.prediction,
        },
      ]);
    } catch (error) {
      setError(error.message || "Prediction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Square footage</label>
          <input
            type="number"
            name="square_footage"
            value={formData.square_footage}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            placeholder="1,500"
          />
          {errors.square_footage && <p className="mt-2 text-sm text-rose-600">{errors.square_footage}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            placeholder="3"
          />
          {errors.bedrooms && <p className="mt-2 text-sm text-rose-600">{errors.bedrooms}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            placeholder="2"
            step="0.5"
          />
          {errors.bathrooms && <p className="mt-2 text-sm text-rose-600">{errors.bathrooms}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Year built</label>
          <input
            type="number"
            name="year_built"
            value={formData.year_built}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            placeholder="2005"
          />
          {errors.year_built && <p className="mt-2 text-sm text-rose-600">{errors.year_built}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Lot size</label>
          <input
            type="number"
            name="lot_size"
            value={formData.lot_size}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            placeholder="7,500"
          />
          {errors.lot_size && <p className="mt-2 text-sm text-rose-600">{errors.lot_size}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Distance to city center</label>
          <input
            type="number"
            name="distance_to_city_center"
            value={formData.distance_to_city_center}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            placeholder="4.5"
            step="0.1"
          />
          {errors.distance_to_city_center && <p className="mt-2 text-sm text-rose-600">{errors.distance_to_city_center}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-slate-700">School rating</label>
          <input
            type="number"
            name="school_rating"
            value={formData.school_rating}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            placeholder="7.5"
            step="0.1"
          />
          {errors.school_rating && <p className="mt-2 text-sm text-rose-600">{errors.school_rating}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">All fields are required for the most accurate estimate.</p>
        <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Predict price
        </button>
      </div>
    </form>
  );
}

export default PropertyForm;
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({ name: '', location: '' });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.location.trim()) {
      alert('Please enter both business name and location');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/business-data', form);
      setData(res.data);
    } catch (err) {
      alert('Error fetching data');
    }
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/regenerate-headline?name=${form.name}&location=${form.location}`
      );
      setData({ ...data, headline: res.data.headline });
    } catch (err) {
      alert('Error regenerating headline');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Local Business Dashboard</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <label className="block mb-2 font-medium">Business Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="w-8 h-8 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
          <span className="ml-2 text-blue-500">Loading...</span>
        </div>
      )}

      {data && !loading && (
        <div className="mt-6 bg-white p-6 rounded shadow-md w-full max-w-md">
          <p className="text-lg font-semibold mb-2">Rating: {data.rating}</p>
          <p className="text-lg font-semibold mb-2">Reviews: {data.reviews}</p>
          <p className="text-gray-700 italic mb-4">{data.headline}</p>
          <button
            onClick={regenerateHeadline}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Regenerate SEO Headline
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
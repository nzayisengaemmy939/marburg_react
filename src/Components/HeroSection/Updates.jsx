import React, { useEffect, useState } from 'react'; // Import useEffect here
import axios from 'axios';

function Updates() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const getData = async () => {
    const token = localStorage.getItem("token");
    const backend = import.meta.env.VITE_BACKEND_URL;
    
    try {
      const response = await axios.get(`${backend}/updates/getupdate`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      console.log(response.data, "Fetched updates");
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const StatItem = ({ value, label }) => (
    <div className="text-center">
      <div className="text-2xl md:text-4xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );

  // Render loading state or error message if necessary
  if (loading) {
    return <div className="text-white text-center">Loading updates...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error fetching updates: {error}</div>;
  }

  // Check if data is available and has the expected structure
  if (!data.length) {
    return <div className="text-white text-center">No updates available.</div>;
  }

  return (
    <div className="bg-[#223A66] py-2 rounded-lg md:px-20 px-4 mt-10">
      <h2 className="text-white text-center mb-4">Update</h2>
      <div className="flex justify-between py-5">
        <StatItem value={data[0].died} label="Died" />
        <StatItem value={data[0].recovered} label="Recovered" />
        <StatItem value={data[0].sick} label="Sick" />
        <StatItem value={data[0].test} label="Test" />
      </div>
    </div>
  );
}

export default Updates;

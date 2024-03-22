import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TripPlanner = () => {
  const { tripId } = useParams();
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editable, setEditable] = useState(false);
  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const res = await axios.get(`API_ENDPOINT/trips/${tripId}`);
        setTripData(res.data.trip);
        setPermissions(res.data.permissions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trip data:", error);
        setLoading(false);
      }
    };

    fetchTripData();
  }, [tripId]);

  const handleEditPermission = () => {
    // Logic to toggle edit permission
    setEditable(!editable);
  };

  const handleSaveChanges = async () => {
    try {
      // Logic to save changes to trip data
      await axios.put(`API_ENDPOINT/trips/${tripId}`, tripData);
      // Show success alert
      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      // Show error alert
      alert("Error saving changes. Please try again later.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!tripData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error: Trip data not found</p>
      </div>
    );
  }
  
    
  

  return (
    
    <div className="container mx-auto  mt-20 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Trip Planner</h1>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{tripData.title || 'Untitled Trip'}</h2> {/* Added fallback value */}
          {permissions.canEdit && (
            <button
              onClick={handleEditPermission}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {editable ? "Cancel Editing" : "Edit"}
            </button>
          )}
          {editable && (
            <button
              onClick={handleSaveChanges}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save Changes
            </button>
          )}
        </div>
        <div className="bg-gray-100 p-4 rounded">
          {/* Render trip data here */}
          {editable ? (
            <textarea
              value={tripData.description}
              onChange={(e) =>
                setTripData({ ...tripData, description: e.target.value })
              }
              className="w-full h-40 border rounded p-2"
            ></textarea>
          ) : (
            <p>{tripData.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;

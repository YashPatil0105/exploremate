import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID for generating unique IDs

const TripPlanner = () => {
  // Simulated array of trips
  const [trips, setTrips] = useState([]);

  // State for new trip inputs
  const [newTrip, setNewTrip] = useState({
    id: uuidv4(), // Generate unique ID for new trip
    title: "",
    description: "",
    dateTime: "",
  });

  // State to track the ID of the trip being edited
  const [editingTripId, setEditingTripId] = useState(null);

  // Handle input change for new trip
  const handleNewTripChange = (e) => {
    const { name, value } = e.target;
    setNewTrip({
      ...newTrip,
      [name]: value,
    });
  };

  // Handle adding a new trip
  const handleAddTrip = () => {
    if (!newTrip.title || !newTrip.description || !newTrip.dateTime) {
      alert("Please fill out all fields before adding a trip.");
      return;
    }
    setTrips([...trips, newTrip]);
    // Clear input fields after adding trip
    setNewTrip({
      id: uuidv4(),
      title: "",
      description: "",
      dateTime: "",
    });
  };

  // Handle removing a trip
  const handleRemoveTrip = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this item?");
    if (isConfirmed) {
      setTrips(trips.filter((trip) => trip.id !== id));
  };
    }
    

  // Handle editing a trip
  const handleEditTrip = (id) => {
    setEditingTripId(id);
    // Find the trip with the provided ID and set its details in the input fields
    const tripToEdit = trips.find((trip) => trip.id === id);
    setNewTrip(tripToEdit);
  };

  // Handle saving edited trip
  const handleSaveEditedTrip = () => {
    const updatedTrips = trips.map((trip) =>
      trip.id === newTrip.id ? newTrip : trip
    );
    setTrips(updatedTrips);
    setEditingTripId(null); // Reset editing trip ID
    // Clear input fields after saving edited trip
    setNewTrip({
      id: uuidv4(),
      title: "",
      description: "",
      dateTime: "",
    });
  };

  return (
    <div className="container mx-auto mt-20 py-8">
      {/* Trip Maker Platform */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Trip Maker</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="title"
            placeholder="Enter trip title"
            value={newTrip.title}
            onChange={handleNewTripChange}
            className="border rounded p-2"
          />
          <textarea
            name="description"
            placeholder="Enter trip description"
            value={newTrip.description}
            onChange={handleNewTripChange}
            className="border rounded p-2"
          ></textarea>
          <input
            type="datetime-local"
            name="dateTime"
            value={newTrip.dateTime}
            onChange={handleNewTripChange}
            className="border rounded p-2"
          />
          {editingTripId ? (
            <button
              onClick={handleSaveEditedTrip}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Edited Trip
            </button>
          ) : (
            <button
              onClick={handleAddTrip}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Trip
            </button>
          )}
        </div>
      </div>

      {/* Trip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="relative bg-gray-100 p-4 rounded group"
          >
            <h2 className="text-xl font-semibold mb-2">{trip.title}</h2>
            <p className="mb-4">{trip.description}</p>
            <p>{trip.dateTime}</p>
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleRemoveTrip(trip.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
              <button
                onClick={() => handleEditTrip(trip.id)}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => alert(`Share trip with ID: ${trip.id}`)}
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripPlanner;

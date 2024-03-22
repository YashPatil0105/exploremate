import React, { useState, useEffect } from "react";
import axios from "axios";

const FlightComparison = () => {
  const [flightPrices, setFlightPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlightPrices = async () => {
      try {
        const [flight1, flight2, flight3] = await Promise.all([
          axios.get("API_ENDPOINT_1"),
          axios.get("API_ENDPOINT_2"),
          axios.get("API_ENDPOINT_3"),
        ]);
        setFlightPrices([flight1.data, flight2.data, flight3.data]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching flight prices:", error);
        setLoading(false);
      }
    };

    fetchFlightPrices();
  }, []);

  return (
    <div className="container mx-auto mt-20 py-8">
      <h1 className="text-3xl font-bold mb-4">Flight Price Comparison</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flightPrices.map((flight, index) => (
            <div key={index} className="border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">{flight.website}</h2>
              <p className="text-gray-600">Price: ${flight.price}</p>
              <p className="text-gray-600">Departure: {flight.departure}</p>
              <p className="text-gray-600">Arrival: {flight.arrival}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightComparison;

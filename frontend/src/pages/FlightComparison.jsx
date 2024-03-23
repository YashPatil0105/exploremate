// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FlightComparison = () => {
//   const [flightPrices, setFlightPrices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFlightPrices = async () => {
//       try {
//         const [flight1, flight2, flight3] = await Promise.all([
//           axios.get("API_ENDPOINT_1"),
//           axios.get("API_ENDPOINT_2"),
//           axios.get("API_ENDPOINT_3"),
//         ]);
//         setFlightPrices([flight1.data, flight2.data, flight3.data]);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching flight prices:", error);
//         setLoading(false);
//       }
//     };

//     fetchFlightPrices();
//   }, []);

//   return (
//     <div className="container mx-auto mt-20 py-8">
//       <h1 className="text-3xl font-bold mb-4">Flight Price Comparison</h1>
//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {flightPrices.map((flight, index) => (
//             <div key={index} className="border rounded p-4">
//               <h2 className="text-xl font-semibold mb-2">{flight.website}</h2>
//               <p className="text-gray-600">Price: ${flight.price}</p>
//               <p className="text-gray-600">Departure: {flight.departure}</p>
//               <p className="text-gray-600">Arrival: {flight.arrival}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlightComparison;
import React, { useState, useEffect } from "react";
import { FaSearch, FaExchangeAlt } from "react-icons/fa";

const FlightComparison = () => {
  const [flightPrices, setFlightPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const generateRandomPrice = () => {
      return Math.floor(Math.random() * 500) + 100; // Generate random price between 100 and 599
    };

    const generateRandomDate = () => {
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(startDate.getDate() + Math.floor(Math.random() * 7)); // Random date within next 7 days
      return endDate.toLocaleDateString("en-US");
    };

    const airlines = [
      "American Airlines",
      "Delta Air Lines",
      "United Airlines",
      "Lufthansa",
      "Emirates",
      "British Airways",
      "Air France",
      "Qatar Airways",
      "Singapore Airlines",
      "Cathay Pacific"
    ];

    const fakeFlightData = Array.from({ length: 50 }, (_, index) => ({
      website: airlines[Math.floor(Math.random() * airlines.length)],
      price: generateRandomPrice(),
      departure: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0")} ${Math.random() < 0.5 ? "AM" : "PM"}`,
      arrival: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0")} ${Math.random() < 0.5 ? "AM" : "PM"}`,
      date: generateRandomDate()
    }));

    // Simulating loading delay with setTimeout
    const fetchFlightPrices = () => {
      setTimeout(() => {
        setFlightPrices(fakeFlightData);
        setLoading(false);
      }, 1000);
    };

    fetchFlightPrices();
  }, []);

  const handleSearch = () => {
    // Perform search with provided inputs (fromPlace, toPlace, date)
    console.log("Searching for flights from", fromPlace, "to", toPlace, "on", date);
  };

  const handleExchange = () => {
    // Exchange values between fromPlace and toPlace
    const temp = fromPlace;
    setFromPlace(toPlace);
    setToPlace(temp);
  };

  return (
    <div className="container mx-auto mt-20 py-8">
      <h1 className="text-3xl font-bold mb-4">Flight Price Comparison</h1>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <input
          type="text"
          value={fromPlace}
          onChange={(e) => setFromPlace(e.target.value)}
          placeholder="From"
          className="border rounded p-2 mb-2 md:mb-0 md:mr-2"
        />
        <FaExchangeAlt onClick={handleExchange} className="cursor-pointer text-2xl md:mx-2" />
        <input
          type="text"
          value={toPlace}
          onChange={(e) => setToPlace(e.target.value)}
          placeholder="To"
          className="border rounded p-2 mb-2 md:mb-0 md:mr-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          className="border rounded p-2 mb-2 md:mb-0 md:mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
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
              <p className="text-gray-600">Date: {flight.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightComparison;

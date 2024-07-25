// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const FlightComparison = () => {
// //   const [flightPrices, setFlightPrices] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchFlightPrices = async () => {
// //       try {
// //         const [flight1, flight2, flight3] = await Promise.all([
// //           axios.get("API_ENDPOINT_1"),
// //           axios.get("API_ENDPOINT_2"),
// //           axios.get("API_ENDPOINT_3"),
// //         ]);
// //         setFlightPrices([flight1.data, flight2.data, flight3.data]);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching flight prices:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchFlightPrices();
// //   }, []);

// //   return (
// //     <div className="container mx-auto mt-20 py-8">
// //       <h1 className="text-3xl font-bold mb-4">Flight Price Comparison</h1>
// //       {loading ? (
// //         <p className="text-center">Loading...</p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //           {flightPrices.map((flight, index) => (
// //             <div key={index} className="border rounded p-4">
// //               <h2 className="text-xl font-semibold mb-2">{flight.website}</h2>
// //               <p className="text-gray-600">Price: ${flight.price}</p>
// //               <p className="text-gray-600">Departure: {flight.departure}</p>
// //               <p className="text-gray-600">Arrival: {flight.arrival}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default FlightComparison;
// // import React, { useState, useEffect } from "react";
// // import { FaSearch, FaExchangeAlt } from "react-icons/fa";

// // const FlightComparison = () => {
// //   const [flightPrices, setFlightPrices] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [fromPlace, setFromPlace] = useState("");
// //   const [toPlace, setToPlace] = useState("");
// //   const [date, setDate] = useState("");

// //   useEffect(() => {
// //     const generateRandomPrice = () => {
// //       return Math.floor(Math.random() * 500) + 100; // Generate random price between 100 and 599
// //     };

// //     const generateRandomDate = () => {
// //       const startDate = new Date();
// //       const endDate = new Date();
// //       endDate.setDate(startDate.getDate() + Math.floor(Math.random() * 7)); // Random date within next 7 days
// //       return endDate.toLocaleDateString("en-US");
// //     };

// //     const airlines = [
// //       "American Airlines",
// //       "Delta Air Lines",
// //       "United Airlines",
// //       "Lufthansa",
// //       "Emirates",
// //       "British Airways",
// //       "Air France",
// //       "Qatar Airways",
// //       "Singapore Airlines",
// //       "Cathay Pacific"
// //     ];

// //     const fakeFlightData = Array.from({ length: 50 }, (_, index) => ({
// //       website: airlines[Math.floor(Math.random() * airlines.length)],
// //       price: generateRandomPrice(),
// //       departure: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)
// //         .toString()
// //         .padStart(2, "0")} ${Math.random() < 0.5 ? "AM" : "PM"}`,
// //       arrival: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)
// //         .toString()
// //         .padStart(2, "0")} ${Math.random() < 0.5 ? "AM" : "PM"}`,
// //       date: generateRandomDate()
// //     }));

// //     // Simulating loading delay with setTimeout
// //     const fetchFlightPrices = () => {
// //       setTimeout(() => {
// //         setFlightPrices(fakeFlightData);
// //         setLoading(false);
// //       }, 1000);
// //     };

// //     fetchFlightPrices();
// //   }, []);

// //   const handleSearch = () => {
// //     // Perform search with provided inputs (fromPlace, toPlace, date)
// //     console.log("Searching for flights from", fromPlace, "to", toPlace, "on", date);
// //   };

// //   const handleExchange = () => {
// //     // Exchange values between fromPlace and toPlace
// //     const temp = fromPlace;
// //     setFromPlace(toPlace);
// //     setToPlace(temp);
// //   };

// //   return (
// //     <div className="container mx-auto mt-20 py-8">
// //       <h1 className="text-3xl font-bold mb-4">Flight Price Comparison</h1>
// //       <div className="flex flex-col md:flex-row items-center mb-4">
// //         <input
// //           type="text"
// //           value={fromPlace}
// //           onChange={(e) => setFromPlace(e.target.value)}
// //           placeholder="From"
// //           className="border rounded p-2 mb-2 md:mb-0 md:mr-2"
// //         />
// //         <FaExchangeAlt onClick={handleExchange} className="cursor-pointer text-2xl md:mx-2" />
// //         <input
// //           type="text"
// //           value={toPlace}
// //           onChange={(e) => setToPlace(e.target.value)}
// //           placeholder="To"
// //           className="border rounded p-2 mb-2 md:mb-0 md:mr-2"
// //         />
// //         <input
// //           type="date"
// //           value={date}
// //           onChange={(e) => setDate(e.target.value)}
// //           placeholder="Date"
// //           className="border rounded p-2 mb-2 md:mb-0 md:mr-2"
// //         />
// //         <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
// //           <FaSearch className="mr-2" /> Search
// //         </button>
// //       </div>
// //       {loading ? (
// //         <p className="text-center">Loading...</p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //           {flightPrices.map((flight, index) => (
// //             <div key={index} className="border rounded p-4">
// //               <h2 className="text-xl font-semibold mb-2">{flight.website}</h2>
// //               <p className="text-gray-600">Price: ${flight.price}</p>
// //               <p className="text-gray-600">Departure: {flight.departure}</p>
// //               <p className="text-gray-600">Arrival: {flight.arrival}</p>
// //               <p className="text-gray-600">Date: {flight.date}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default FlightComparison;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaSearch, FaExchangeAlt, FaPlane } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const FlightComparison = () => {
//   const [flightPrices, setFlightPrices] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [fromPlace, setFromPlace] = useState('');
//   const [toPlace, setToPlace] = useState('');
//   const [date, setDate] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     // Call fetchFlightData with default values or user-provided inputs
//     fetchFlightData('New York', 'Los Angeles', '2024-04-20');
//   }, []);

//   const fetchFlightData = async (fromPlace, toPlace, date) => {
//     try {
//       setLoading(true);
//       setErrorMessage('');

//       const response = await axios.get('https://serp-api.com/search', {
//         params: {
//           q: `flights from ${fromPlace} to ${toPlace} on ${date}`,
//           // Add any other necessary parameters for the SERP API
//         },
//         headers: {
//           'X-API-KEY': '54ccf004d816814b5fd824d6afef223e40bbc425f473b25c5dc8d21af8be230c', // Replace with your actual API key
//         },
//       });

//       // Process the response data and update the state with the flight prices
//       const flightData = response.data.results.map((result) => {
//         // Extract relevant data from the API response
//         return {
//           website: result.website,
//           price: result.price,
//           // Add other relevant data from the API response
//         };
//       });

//       setFlightPrices(flightData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching flight data:', error);
//       setErrorMessage('Failed to fetch flight data. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     if (!fromPlace || !toPlace || !date) {
//       setErrorMessage('Please enter all required fields.');
//       return;
//     }

//     fetchFlightData(fromPlace, toPlace, date);
//   };

//   const handleExchange = () => {
//     const temp = fromPlace;
//     setFromPlace(toPlace);
//     setToPlace(temp);
//   };

//   return (
//     <div className="container mx-auto mt-20 py-8">
//       <h1 className="text-3xl font-bold mb-4 text-center">
//         <FaPlane className="inline-block mr-2 animate-bounce" />
//         Flight Price Comparison
//       </h1>
//       <div className="flex flex-col md:flex-row items-center mb-4">
//         <input
//           type="text"
//           value={fromPlace}
//           onChange={(e) => setFromPlace(e.target.value)}
//           placeholder="From"
//           className="border rounded p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
//         />
//         <FaExchangeAlt
//           onClick={handleExchange}
//           className="cursor-pointer text-2xl md:mx-2 hover:text-blue-500 transition-colors duration-300"
//         />
//         <input
//           type="text"
//           value={toPlace}
//           onChange={(e) => setToPlace(e.target.value)}
//           placeholder="To"
//           className="border rounded p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
//         />
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           placeholder="Date"
//           className="border rounded p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
//         />
//         <motion.button
//           onClick={handleSearch}
//           className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition-colors duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <FaSearch className="mr-2" /> Search
//         </motion.button>
//       </div>
//       {errorMessage && (
//         <p className="text-red-500 text-center mb-4">{errorMessage}</p>
//       )}
//       {loading ? (
//         <div className="flex justify-center">
//           <FaPlane className="text-5xl animate-spin" />
//         </div>
//       ) : (
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {flightPrices.map((flight, index) => (
//             <motion.div
//               key={index}
//               className="border rounded p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h2 className="text-xl font-semibold mb-2">{flight.website}</h2>
//               <p className="text-gray-600">Price: ${flight.price}</p>
//               {/* Add other flight data fields */}
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default FlightComparison;
import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaExchangeAlt, FaPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cities = [
  {
    city: "New Delhi",
    airport_name: "Indira Gandhi International Airport",
    iata_code: "DEL",
  },
  {
    city: "Mumbai",
    airport_name: "Chhatrapati Shivaji Maharaj International Airport",
    iata_code: "BOM",
  },
  {
    city: "Bangalore",
    airport_name: "Kempegowda International Airport",
    iata_code: "BLR",
  },
  {
    city: "Chennai",
    airport_name: "Chennai International Airport",
    iata_code: "MAA",
  },
  {
    city: "Kolkata",
    airport_name: "Netaji Subhas Chandra Bose International Airport",
    iata_code: "CCU",
  },
  {
    city: "Hyderabad",
    airport_name: "Rajiv Gandhi International Airport",
    iata_code: "HYD",
  },
  {
    city: "Kochi",
    airport_name: "Cochin International Airport",
    iata_code: "COK",
  },
  {
    city: "Ahmedabad",
    airport_name: "Sardar Vallabhbhai Patel International Airport",
    iata_code: "AMD",
  },
  {
    city: "Goa",
    airport_name: "Goa International Airport",
    iata_code: "GOI",
  },
  {
    city: "Pune",
    airport_name: "Pune Airport",
    iata_code: "PNQ",
  },
  {
    city: "Jaipur",
    airport_name: "Jaipur International Airport",
    iata_code: "JAI",
  },
  {
    city: "Bengaluru",
    airport_name: "Bengaluru International Airport",
    iata_code: "BLR",
  },
  {
    city: "Srinagar",
    airport_name: "Srinagar International Airport",
    iata_code: "SXR",
  },
  {
    city: "Ahmedabad",
    airport_name: "Ahmedabad International Airport",
    iata_code: "AMD",
  },
  {
    city: "Kozhikode (Calicut)",
    airport_name: "Calicut International Airport",
    iata_code: "CCJ",
  },
  {
    city: "Amritsar",
    airport_name: "Amritsar International Airport",
    iata_code: "ATQ",
  },
  {
    city: "Thiruvananthapuram",
    airport_name: "Trivandrum International Airport",
    iata_code: "TRV",
  },
  {
    city: "Lucknow",
    airport_name: "Lucknow Chaudhary Charan Singh International Airport",
    iata_code: "LKO",
  },
  {
    city: "Bhopal",
    airport_name: "Bhopal Raja Bhoj Airport",
    iata_code: "BHO",
  },
  {
    city: "Guwahati",
    airport_name: "Guwahati Lokpriya Gopinath Bordoloi International Airport",
    iata_code: "GAU",
  },
  {
    city: "Visakhapatnam",
    airport_name: "Visakhapatnam Airport",
    iata_code: "VTZ",
  },
  {
    city: "Coimbatore",
    airport_name: "Coimbatore International Airport",
    iata_code: "CJB",
  },
  {
    city: "Varanasi",
    airport_name: "Varanasi Lal Bahadur Shastri Airport",
    iata_code: "VNS",
  },
  {
    city: "Thiruvananthapuram",
    airport_name: "Thiruvananthapuram International Airport",
    iata_code: "TRV",
  },
  {
    city: "Nagpur",
    airport_name: "Nagpur Dr. Babasaheb Ambedkar International Airport",
    iata_code: "NAG",
  },
];
const FlightComparison = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      const departureIATA = cities.find(
        (city) => city.city === departureCity
      )?.iata_code;
      const arrivalIATA = cities.find(
        (city) => city.city === arrivalCity
      )?.iata_code;

      if (!departureIATA || !arrivalIATA || !departureDate) {
        setError(
          "Please select departure city, arrival city, and departure date."
        );
        return;
      }

      const data = {
        from_city: departureIATA,
        to_city: arrivalIATA,
        trip_type: "2",
        outbound_date: departureDate,
      };

      const response = await axios.post(
        `https://exploremate-pythoncode.onrender.com/flights`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(10);

      if (response.status >= 200 && response.status < 300) {
        setResponseData(response.data);
        setError(null);
        console.log(response.data);
        // Open the modal after successful response
        setModalIsOpen(true);
      } else {
        setError(response.data.answer || "An error occurred.");
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
      setError("An error occurred while fetching the answer.");
    }
    setLoading(false);
    console.log(11);
  };
  
  const handleExchange = () => {
    // Swap the values of departureCity and arrivalCity
    const tempDepartureCity = departureCity;
    setDepartureCity(arrivalCity);
    setArrivalCity(tempDepartureCity);
  };
return (
    <div className="container mx-auto mt-20 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        <FaPlane className="inline-block mr-2 animate-bounce" />
        Flight Price Comparison
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center mb-4">
        <select
          value={departureCity}
          onChange={(e) => setDepartureCity(e.target.value)}
          className="border rounded p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
        >
          <option value="">From</option>
          {cities.map((city) => (
            <option key={city.iata_code} value={city.city}>{city.city}</option>
          ))}
        </select>
        <FaExchangeAlt
          onClick={handleExchange}
          className="cursor-pointer text-2xl md:mx-2 hover:text-blue-500 transition-colors duration-300"
        />
        <select
          value={arrivalCity}
          onChange={(e) => setArrivalCity(e.target.value)}
          className="border rounded p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
        >
          <option value="">To</option>
          {cities.map((city) => (
            <option key={city.iata_code} value={city.city}>{city.city}</option>
          ))}
        </select>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          placeholder="Date"
          className="border rounded p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
        />
        <motion.button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition-colors duration-300 w-full md:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaSearch className="mr-2" /> Search
        </motion.button>
      </div>
      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}
      {loading && (
        <div className="flex justify-center">
          <FaPlane className="text-5xl animate-spin" />
        </div>
      )}
      {responseData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(responseData).map(([key, flight]) => (
            <div key={key} className="border p-4 rounded shadow-md">
              <img src={flight.airline_logo[0]} alt={flight.airline_name} className="mb-4" />
              <h2 className="text-xl font-bold mb-2">{flight.airline_name}</h2>
              <p className="mb-2">Flight Number: {flight.flight_number[0]}</p>
              <p className="mb-2">Price: ₹{flight.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightComparison;

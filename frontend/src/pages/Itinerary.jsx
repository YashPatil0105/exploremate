// import React, { useState } from "react";

// const Itinerary = () => {
//   const [itinerary, setItinerary] = useState([
//     { id: 1, day: "Monday", activity: "Explore city", time: "9:00 AM" },
//     { id: 2, day: "Tuesday", activity: "Visit museum", time: "10:00 AM" },
//     { id: 3, day: "Wednesday", activity: "Hiking", time: "8:00 AM" },
//   ]);

//   const [newItem, setNewItem] = useState({ day: "", activity: "", time: "" });

//   const handleChange = (e) => {
//     setNewItem({ ...newItem, [e.target.name]: e.target.value });
//   };

//   const handleAddItem = () => {
//     if (newItem.day && newItem.activity && newItem.time) {
//       setItinerary([...itinerary, { ...newItem, id: Date.now() }]);
//       setNewItem({ day: "", activity: "", time: "" });
//     }
//   };

//   const handleRemoveItem = (id) => {
//     setItinerary(itinerary.filter((item) => item.id !== id));
//   };

//   const handleUpdateItem = (id, updatedItem) => {
//     setItinerary(
//       itinerary.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
//     );
//   };

//   return (
//     <div className="container mx-auto mt-20 py-8">
//       <h1 className="text-3xl font-bold mb-4 text-center">Your Itinerary</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {itinerary.map((item) => (
//           <div key={item.id} className="border rounded p-4 bg-gray-100">
//             <h2 className="text-xl font-semibold mb-2">{item.day}</h2>
//             <p className="text-gray-600">Activity: {item.activity}</p>
//             <p className="text-gray-600">Time: {item.time}</p>
//             <div className="flex justify-end mt-2">
//               <button
//                 onClick={() => handleRemoveItem(item.id)}
//                 className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mr-2"
//               >
//                 Remove
//               </button>
//               <button
//                 onClick={() => handleUpdateItem(item.id, { day: "Thursday" })}
//                 className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8">
//         <h2 className="text-xl font-bold mb-2">Add New Item</h2>
//         <div className="flex flex-col sm:flex-row">
//           <input
//             type="text"
//             name="day"
//             placeholder="Day"
//             value={newItem.day}
//             onChange={handleChange}
//             className="border border-gray-300 rounded mr-2 mb-2 sm:mb-0 sm:w-1/3 px-4 py-2"
//           />
//           <input
//             type="text"
//             name="activity"
//             placeholder="Activity"
//             value={newItem.activity}
//             onChange={handleChange}
//             className="border border-gray-300 rounded mr-2 mb-2 sm:mb-0 sm:w-1/3 px-4 py-2"
//           />
//           <input
//             type="text"
//             name="time"
//             placeholder="Time"
//             value={newItem.time}
//             onChange={handleChange}
//             className="border border-gray-300 rounded mr-2 mb-2 sm:mb-0 sm:w-1/3 px-4 py-2"
//           />
//           <button
//             onClick={handleAddItem}
//             className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded sm:w-auto"
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Itinerary;

import React, { useState, useEffect } from "react";

const Itinerary = () => {
  const [itinerary, setItinerary] = useState([
    { id: 1, day: "2024-03-25", activity: "Explore city", time: "09:00" },
    { id: 2, day: "2024-03-26", activity: "Visit museum", time: "10:00" },
    { id: 3, day: "2024-03-27", activity: "Hiking", time: "08:00" },
  ]);

  const [newItem, setNewItem] = useState({ id: null, day: "", activity: "", time: "" });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    if (newItem.day && newItem.activity && newItem.time) {
      if (newItem.id) {
        setItinerary(itinerary.map((item) => (item.id === newItem.id ? newItem : item)));
      } else {
        setItinerary([...itinerary, { ...newItem, id: Date.now() }]);
      }
      setNewItem({ id: null, day: "", activity: "", time: "" });
    }
  };

  const handleRemoveItem = (id) => {
    setItinerary(itinerary.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id) => {
    const itemToUpdate = itinerary.find((item) => item.id === id);
    if (itemToUpdate) {
      setNewItem({ ...itemToUpdate });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  useEffect(() => {
    // Sort itinerary by date and time when it changes
    setItinerary([...itinerary].sort((a, b) => {
      const dateComparison = new Date(a.day) - new Date(b.day);
      if (dateComparison !== 0) {
        return dateComparison;
      }
      return a.time.localeCompare(b.time);
    }));
  }, [itinerary]);

  return (
    <div className="container mx-auto mt-20 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Itinerary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {itinerary.map((item) => (
          <div key={item.id} className="cards border rounded bg-gray-300 shadow-x  p-4 ">
            <h2 className="text-xl font-semibold mb-2">{item.day}</h2>
            <p className="text-gray-600">Activity: {item.activity}</p>
            <p className="text-gray-600">Time: {item.time}</p>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="bg-[#dc6a60] hover:bg-red-600 text-white py-1 px-2 rounded mr-2"
              >
                Remove
              </button>
              <button
                onClick={() => handleUpdateItem(item.id)}
                className="bg-[#3d91bb] hover:bg-cyan-700 text-white py-1 px-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Add New Item</h2>
        <div className="flex flex-col sm:flex-row">
          <input
            type="date"
            name="day"
            placeholder="Day"
            value={newItem.day}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="border border-gray-300 rounded mr-2 mb-2 sm:mb-0 sm:w-1/3 px-4 py-2"
          />
          <input
            type="text"
            name="activity"
            placeholder="Activity"
            value={newItem.activity}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="border border-gray-300 rounded mr-2 mb-2 sm:mb-0 sm:w-1/3 px-4 py-2"
          />
          <input
            type="time"
            name="time"
            placeholder="Time"
            value={newItem.time}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="border border-gray-300 rounded mr-2 mb-2 sm:mb-0 sm:w-1/3 px-4 py-2"
          />
          <button
            onClick={handleAddItem}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded sm:w-auto"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;


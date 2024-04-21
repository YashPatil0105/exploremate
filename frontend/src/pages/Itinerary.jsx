
// export default Itinerary;
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {duration} from "moment";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  // Add leading zero if month/day is a single digit
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
const Itinerary = () => {
  const [itinerary, setItinerary] = useState([]);
  const [newItem, setNewItem] = useState({ day: "", activity: "", time: "" });


  // useEffect(() => {
  //   // Retrieve itinerary data from local storage on component mount
  //   const storedItinerary = JSON.parse(localStorage.getItem("itinerary")) || [];
  //   setItinerary(storedItinerary);
  // }, []);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const fetchItinerary = async () => {
      try {
        console.log("initial request");
        // Make an HTTP GET request to fetch the itinerary data from the database
        const response = await axios.get(`http://localhost:5000/itinerary?userId=${userId}`);
        // const userItinerary = response.data.filter(item => item.author.some(authorId => authorId === userId));
        // Set the fetched itinerary data to the state
        setItinerary(response.data);
      } catch (error) {
        // Handle any errors that occur during the fetch
        console.error("Error fetching itinerary:", error);
      }
    };
  
    // Call the fetchItinerary function when the component mounts
    fetchItinerary();
  }, []);
  

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const userId=JSON.parse(localStorage.getItem("user"))._id;

  const navigate= useNavigate();
  // console.log(userId);
  
  const handleAddItem = async () => {
    console.log("Enter");
    // e.preventDefault();
    // const {activity,day,time}=e.target;
    const activity2={
      userId:userId,
      day:newItem.day,
      activity:newItem.activity,
      time:newItem.time,
    };
    console.log(activity2);

    const res=await axios.post(
      "http://localhost:5000/itinerary",
      activity2
    );
    console.log("step")
    if(res.status===201){
      // console.log("activity added");
      toast.success("Activity  added successfully");
      window.location.reload();
      // setTimeout(() => {
      //   navigate("/itinerary");
      // }, 2000);
    }else{
      toast.error("something went wrong");
    }



  };

  // const handleRemoveItem = (id) => {
  //   const isConfirmed = window.confirm("Are you sure you want to remove this item?");
  //   if (isConfirmed) {
  //     const updatedItinerary = itinerary.filter((item) => item.id !== id);
  //     setItinerary(updatedItinerary);
  //     // Store updated itinerary data in local storage
  //     localStorage.setItem("itinerary", JSON.stringify(updatedItinerary));
  //   }
  // };
  const handleRemoveItem = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this item?");
    if (isConfirmed) {
      try {
        // Make a DELETE request to the backend to remove the itinerary item
        await axios.delete(`http://localhost:5000/itinerary/${id}`);
        // Update the itinerary state in the frontend to reflect the deletion
        const updatedItinerary = itinerary.filter((item) => item._id !== id);
        setItinerary(updatedItinerary);
        // Optionally, you can update local storage or perform any other necessary tasks
      } catch (error) {
        console.error("Error removing item:", error);
        toast.error("Failed to remove item");
      }
    }
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

  return (
    <div className="container mx-auto mt-20 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Itinerary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {itinerary.map((item) => (
          <div key={item.id} className="cards border rounded bg-gray-300 shadow-x  p-4 ">
            <h2 className="text-xl font-semibold mb-2">{formatDate(item.day)}</h2>
            <p className="text-gray-600">Activity: {item.activity}</p>
            <p className="text-gray-600">Time: {item.time}</p>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => handleRemoveItem(item._id)}
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
            className="border border-gray-300 rounded mr-2 mb-2 sm:mb-0 sm:w-1/3 px-4 py-2"
          />
          <input
            type="text"
            name="activity"
            placeholder="Activity"
            value={newItem.activity}
            onChange={handleChange}
            className="border border-gray-300 rounded mr-2 mb-2 sm:mb-0 sm:w-1/3 px-4 py-2"
          />
          <input
            type="time"
            name="time"
            placeholder="Time"
            value={newItem.time}
            onChange={handleChange}
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



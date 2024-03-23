// import React from "react";



// const Hero = () => {
//   const [priceValue, setPriceValue] = React.useState(30);

//   return (
//     <div className=" bg-black/20 h-full">
//       <div className="h-full flex justify-center items-center p-4 bg-primary/10">
//         <div className="container grid grid-cols-1 gap-4">
//           <div className="text-white">
//             <p data-aos="fade-up" className="text-sm">
//               Our Packages
//             </p>
//             <p
//               data-aos="fade-up"
//               data-aos-delay="300"
//               className="font-bold text-3xl"
//             >
//               Search Your Destination
//             </p>
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="600"
//             className="space-y-4 bg-white rounded-md p-4 relative"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
//               <div>
//                 <label htmlFor="destination" className="opacity-70">
//                   Searh your Destination
//                 </label>
//                 <input
//                   type="text"
//                   name="destination"
//                   id="destination"
//                   placeholder="Dubai"
//                   className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="destination" className="opacity-70">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="destination"
//                   id="destination"
//                   className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="destination" className="opacity-70">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="destination"
//                   id="destination"
//                   className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="destination" className="opacity-70 block">
//                   <div className="w-full flex justify-between items-center">
//                     <p>Budget</p>
//                     <p className="font-bold text-xl">$ {priceValue}</p>
//                   </div>
//                 </label>
//                 <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
//                   <input
//                     type="range"
//                     name="destination"
//                     id="destination"
//                     className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
//                     min="150"
//                     max="1000"
//                     value={priceValue}
//                     step="10"
//                     onChange={(e) => setPriceValue(e.target.value)}
//                   />
//                 </div>
//               </div>
//             </div>
//             <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
//               Search Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import axios from 'axios';

const Hero = () => {
  const [priceValue, setPriceValue] = useState(30);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const destination = document.getElementById("destination").value;
      console.log(destination)
      const startDate = document.getElementById("start-date").value;
      console.log(startDate)
      const endDate = document.getElementById("end-date").value;
      const budget = priceValue;
      console.log(priceValue)

      // const formData = new FormData();
      // formData.append('location', destination);
      // console.log(formData)
      // formData.append('Start_date', startDate);
      // formData.append('end_date', endDate);
      // formData.append('budget', budget);

      const dataa = {
        location: destination,
        Start_date: startDate,
        end_date: endDate,
        budget: budget
      };

      console.log(dataa)


      const response = await axios.post(`http://127.0.0.1:5000/recommendations`,dataa) 
        // // method: 'POST',
        // body: dataa,
      
      console.log("1");
      const data = await response.data;
      console.log(response)
      console.log(data);
      console.log("2");
      if (response.ok) {
        console.log('Data:', data);
        // Handle successful response here
      } else {
        setError(data.answer || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error fetching answer:', error);
      setError('An error occurred while fetching the answer.');
    }
  };

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="start-date" className="opacity-70">
                  Start Date
                </label>
                <input
                  type="date"
                  name="start-date"
                  id="start-date"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="end-date" className="opacity-70">
                  End Date
                </label>
                <input
                  type="date"
                  name="end-date"
                  id="end-date"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="budget" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Budget</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="budget"
                    id="budget"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
            >
              Search Now
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

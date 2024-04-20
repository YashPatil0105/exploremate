// import React from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About";
// import BlogsDetails from "./pages/BlogsDetails";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Register from './pages/Register';
// import Login from './pages/Login';
// import {addUsers} from './context/onlineSlice';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { io } from 'socket.io-client';
// import { useDispatch, useSelector } from 'react-redux';
// import FlightComparison from "./pages/FlightComparison";
// import Itinerary from "./pages/Itinerary";
// import TripPlanner from "./pages/TripPlanner";
// import TravelAdvisor from "./pages/TravelAdvisor";

// const App = () => {

// const user = JSON.parse(localStorage.getItem("user"));


//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="/flight" element={<FlightComparison />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/itinerary" element={<Itinerary />} />
//             <Route path="/tripplanner" element={<TripPlanner />} />
//             <Route path="/advisor" element={<TravelAdvisor />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="blogs/:id" element={<BlogsDetails />} />
//             <Route path="best-places" element={<PlacesRoute />} />
//             <Route path="about" element={<About />} />
//             <Route path="*" element={<NoPage />} />

//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NoPage from './pages/NoPage';
import PlacesRoute from './pages/PlacesRoute';
import About from './pages/About';
import BlogsDetails from './pages/BlogsDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from 'react-query';
import FlightComparison from "./pages/FlightComparison";
import Itinerary from "./pages/Itinerary";
import TripPlanner from "./pages/TripPlanner";
import TravelAdvisor from "./pages/TravelAdvisorPage";
import Header from './components/Header/Header';
import TravelAdvisorPage from './pages/TravelAdvisorPage'; // Import the new page
import FlightListPage from './pages/FlightListPage';
import { useState } from 'react';

const App = () => {
  const [userdata, setUserdata] = useState(null);
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Layout userdata={userdata} setUserdata={setUserdata} />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/flight" element={<FlightComparison />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/flights" element={<FlightListPage />} />
            <Route path="/login" element={<Login setUserdata={setUserdata} />} />
            <Route path="/tripplanner" element={<TripPlanner />} />
            <Route path="/advisor" element={<TravelAdvisor />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/travel-advisor" element={<TravelAdvisorPage />} /> {/* Route to the new page */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

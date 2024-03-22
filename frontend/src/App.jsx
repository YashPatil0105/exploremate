import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import Register from './pages/Register';
import Login from './pages/Login';
import {addUsers} from './context/onlineSlice';
import { QueryClient, QueryClientProvider } from 'react-query';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import FlightComparison from "./pages/FlightComparison";
import Itinerary from "./pages/Itinerary";
import TripPlanner from "./pages/TripPlanner";

// const queryClient = new QueryClient();

// export const socket = io('http://localhost:5000', {
//   withCredentials: true,
//   secure: true,
// });


const App = () => {

//   const [users, setUsers] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user) {
//       window.location.href = '/login';
//     }

//     socket.connect();
//     socket.on('connect', () => {
//       console.log('socket connected');
//     });
//     socket.auth = user;

//     socket.on('user-connected', (users) => {
//       console.log('users', users);
//       dispatch(addUsers(users));
//     });

//     socket.on('user-disconnected', (users) => {
//       console.log('users', users);
//       dispatch(addUsers(users));
//     });

//     const getUsers = async () => {
//       const res = await axios.get('http://localhost:5000/allusers');
//       setUsers(res.data);
//     };
//     getUsers();
//   }, [socket]);


  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="/flight" element={<FlightComparison />} />
            <Route path="/register" element={<Register />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/tripplanner" element={<TripPlanner />} />
            <Route path="/login" element={<Login />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// import React, { useState } from "react";
// import Logo from "../../assets/logo.png";
// import { NavLink, Link } from "react-router-dom";
// import { FaCaretDown } from "react-icons/fa";
// import ResponsiveMenu from "./ResponsiveMenu";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

// export const NavbarLinks = [
//   {
//     name: "Home",
//     link: "/",
//   },
//   {
//     name: "Login/register",
//     link: "/login",
//   },
//   {
//     name: "About",
//     link: "/about",
//   },
//   {
//     name: "Blogs",
//     link: "/blogs",
//   },
//   {
//     name: "Best Places",
//     link: "/best-places",
//   },
// ];

// const DropdownLinks = [
//   {
//     name: "Our Services",
//     link: "/#services",
//   },
//   {
//     name: "Flight Booking",
//     link: "/flight",
//   },
//   {
//     name: "Itinerary Planning",
//     link: "/itinerary",
//   },
//   {
//     name: "Trip Planning",
//     link: "/tripplanner",
//   },
//   {
//     name: "Top Brands",
//     link: "/#mobile_brands",
//   },
//   {
//     name: "Location",
//     link: "/#location",
//   },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <>
//       <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
//         <div className="bg-gradient-to-r from-primary to-secondary text-white ">
//           <div className="container py-[2px] sm:block hidden">
//             <div className="flex items-center justify-between">
//               <p className="text-sm">20% off on next booking</p>
//               <p>mobile no. +91 123456789</p>
//             </div>
//           </div>
//         </div>
//         <div className="container py-3 sm:py-0">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-4  font-bold text-2xl">
//               <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
//                 <img src={Logo} alt="" className="h-16" />
//               </Link>
//               {/* <span>TCJ Tourism</span> */}
//             </div>
//             <div className="hidden md:block">
//               <ul className="flex items-center gap-6 ">
//                 <li className="py-4">
//                   <NavLink to="/" activeClassName="active">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="py-4">
//                   <NavLink to="/blogs" activeClassName="active">
//                     Blogs
//                   </NavLink>
//                 </li>
//                 <li className="py-4">
//                   <NavLink to="/best-places" activeClassName="active">
//                     Best Places
//                   </NavLink>
//                 </li>
//                 <li className="py-4">
//                   <NavLink to="/about" activeClassName="active">
//                     About
//                   </NavLink>
//                 </li>
//                 <li className="group relative cursor-pointer">
//                   <a
//                     href="/#home"
//                     className="flex h-[72px] items-center gap-[2px]"
//                   >
//                     Quick Links{" "}
//                     <span>
//                       <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//                     </span>
//                   </a>
//                   <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
//                     <ul className="space-y-3">
//                       {DropdownLinks.map((data) => (
//                         <li key={data.name}>
//                           <a
//                             className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                             href={data.link}
//                           >
//                             {data.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="py-4">
//                   <NavLink to="/login" activeClassName="active">
//                     Login/Signup
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex items-center gap-4">
//               <button
//                 className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
//                 onClick={() => {
//                   handleOrderPopup();
//                 }}
//               >
//                 Book Now
//               </button>
//               {/* Mobile Hamburger icon */}
//               <div className="md:hidden block">
//                 {showMenu ? (
//                   <HiMenuAlt1
//                     onClick={toggleMenu}
//                     className=" cursor-pointer transition-all"
//                     size={30}
//                   />
//                 ) : (
//                   <HiMenuAlt3
//                     onClick={toggleMenu}
//                     className="cursor-pointer transition-all"
//                     size={30}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  
  {
    name: "Explore",
    link: "/advisor",
  },
  {
    name: "FlightFare",
    link: "/flight",
  },
  {
    name: "Itinerary",
    link: "/itinerary",
  },
  {
    name: "TripSync",
    link: "/tripplanner",
  },
];

const DropdownLinks = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
  
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      setIsLoggedIn(false);
    }
    
    // Redirect to home page after logout
    window.location.href = "/";
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-[#14347e] backdrop-blur-sm text-white text-lg font-semibold shadow-md">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-12" />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                {NavbarLinks.map((link) => (
                  <li key={link.name} className="py-4">
                    <NavLink to={link.link} activeClassName="active">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className="group relative cursor-pointer">
                  <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a className="inline-block w-full rounded-md p-2 hover:bg-primary/20" href={data.link}>
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="py-4">
                  
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                
              >
                {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                  ) : (
                    <NavLink to="/login" activeClassName="active">
                      Login/Signup
                    </NavLink>
                  )}
              </button>
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                ) : (
                  <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;

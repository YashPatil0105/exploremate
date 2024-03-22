// import axios from "axios";
// import React from "react";
// import upload from "../utils/upload";
// import { toast, Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// // import backgroundImage from './bg16.jpg';

// const Register = () => {
//   const [profileImage, setProfileImage] = React.useState(
//     "https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg"
//   );
//   const navigate = useNavigate();

//   const [status, setStatus] = React.useState(null);
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [password_confirmation, setPassword_confirmation] = React.useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password.value !== password_confirmation.value) {
//       toast.error("Password and Confirm Password do not match");
//       return;
//     }

//     const user = {
//       name,
//       email,
//       password,
//       profileImage,
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/signup",
//         user
//       );
//       if (res.status === 201) {
//         toast.success("User created successfully");
//         setTimeout(() => {
//           navigate("/login",{replace:true});
//         }, 1500);
//       } else if (res.status === 400) {
//         toast.error("Something went wrong");
//       } else {
//         toast.error("User already exists");
//       }
//     } catch (err) {
//       toast.error("Something went wrong, error!");
//     }
//   };

//   if (status === "success") {
//     navigate("/login", { replace: true });
//   }

//   const handleFile1 = async (e) => {
//     e.preventDefault();

//     const files = e.target?.files;
//     if (files?.length > 0) {
//       const data = new FormData();
//       for (const file of files) {
//         data.append("file", file);
//       }
//       data.append("upload_preset", "fiverr");
//       const url = await upload(data);
//       setProfileImage(url);
//       console.log("url", profileImage);
//     }
//     toast.success("File Uploaded");
//   };
//   // const setBackgroundImage = () => {
//   //   const backgroundStyle = {
//   //     backgroundImage: `url(${backgroundImage})`,
//   //     backgroundSize: 'cover',
      
//   //     backgroundPosition: 'center',
//   //   };
//   //   return backgroundStyle;
//   // }

//   return (
//     <div className="" >
//       <Toaster />
//       <div
//         className="
      
//       flex flex-col min-h-screen pt-6 sm:pl-52 sm:pt-24 "
//       >
//         <div>
//           <a href="/">
//             <h3 className="protest-riot-regular text-4xl font-bold pl-20">GitaSoulConnect</h3>
//           </a>
//         </div>
//         <div
//           className="w-[80%] md:w-full bg-gray-700  border rounded-md 
//         px-6 py-4 mt-6 overflow-hidden  shadow-md sm:max-w-md"
//         >
//           <form>
//             <label
//               className="mx-auto flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-gray-300 
//                 border-dashed cursor-pointer bg-gray-50
//                 hover:bg-gray-100 "
//             >
//               <img className="rounded-full" src={profileImage} alt="" />
//               <input
//                 onChange={handleFile1}
//                 id="dropzone-file"
//                 type="file"
//                 className="hidden"
//               />
//             </label>
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium 
//                 text-white "
//               >
//                 Name
//               </label>

//               <input
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//                 name="name"
//                 className="border border-gray-200 mt-2 w-full h-10 px-3 rounded 
//                 outline-none 
//                    shadow-sm"
//               />
//             </div>
//             <div className="mt-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-white "
//               >
//                 Email
//               </label>
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 name="email"
//                 className="border border-gray-200 mt-2 w-full h-10 px-3 rounded 
//                 outline-none 
//                    shadow-sm"
//               />
//             </div>
//             <div className="mt-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-white "
//               >
//                 Password
//               </label>
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 name="password"
//                 className="border border-gray-200 mt-2 w-full h-10 px-3 rounded 
//                 outline-none 
//                    shadow-sm"
//               />
//             </div>
//             <div className="mt-4">
//               <label
//                 htmlFor="password_confirmation"
//                 className="block text-sm font-medium text-white "
//               >
//                 Confirm Password
//               </label>
//               <input
//                 onChange={(e) => setPassword_confirmation(e.target.value)}
//                 type="password"
//                 name="password_confirmation"
//                 className="border border-gray-200 mt-2 w-full h-10 px-3 rounded 
//                 outline-none 
//                    shadow-sm"
//               />
//             </div>
//             <div className="flex flex-col items-center justify-center mt-4">
//               <button
//                 onClick={handleSubmit}
//                 className="inline-flex items-center px-4 py-2 text-xs font-semibold 
//                 tracking-widest 
//                 text-white uppercase transition duration-150 ease-in-out 
//                 bg-gray-950 border border-transparent rounded-md 
//                 active:bg-gray-900 false"
//               >
//                 Register
//               </button>
//               <a
//                 className="text-sm text-white underline hover:text-gray-100 pt-1"
//                 href="/login"
//               >
//                 Already have an account? Login
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import axios from "axios";
import React from "react";
import upload from "../utils/upload";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [profileImage, setProfileImage] = React.useState(
    "https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg"
  );
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password_confirmation, setPassword_confirmation] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    const user = {
      name,
      email,
      password,
      profileImage,
    };

    try {
      const res = await axios.post("http://localhost:5000/signup", user);
      if (res.status === 201) {
        toast.success("User created successfully");
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1500);
      } else if (res.status === 400) {
        toast.error("Something went wrong");
      } else {
        toast.error("User already exists");
      }
    } catch (err) {
      toast.error("Something went wrong, error!");
    }
  };

  const handleFile1 = async (e) => {
    e.preventDefault();

    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      data.append("upload_preset", "fiverr");
      const url = await upload(data);
      setProfileImage(url);
    }
    toast.success("File Uploaded");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Toaster />
      <div className="w-full max-w-md">
        <div className="text-center">
          <h3 className="text-3xl font-bold mt-20 mb-2 text-white">Register</h3>
        </div>
        <form>
          <label className="mx-auto flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 hover:bg-gray-100">
            <img className="rounded-full" src={profileImage} alt="" />
            <input onChange={handleFile1} id="dropzone-file" type="file" className="hidden" />
          </label>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" className="border border-gray-200 mt-2 w-full h-10 px-3 rounded outline-none shadow-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="border border-gray-200 mt-2 w-full h-10 px-3 rounded outline-none shadow-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="border border-gray-200 mt-2 w-full h-10 px-3 rounded outline-none shadow-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="block text-white">
              Confirm Password
            </label>
            <input onChange={(e) => setPassword_confirmation(e.target.value)} type="password" name="password_confirmation" className="border border-gray-200 mt-2 w-full h-10 px-3 rounded outline-none shadow-sm" />
          </div>
          <div className="mb-6">
            <button onClick={handleSubmit} className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded">
              Register
            </button>
          </div>
          <p className="text-sm text-white text-center">
            Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

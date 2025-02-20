// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (
//     <div className="min-h-screen bg-blue-100">
//       {/* Navbar-style Logo */}
//       <div className="p-4">
//         <h1 className="text-3xl font-bold text-blue-600">DriveEase</h1>
//       </div>

//       {/* Centered Login Form */}
//       <div className="flex justify-center items-center min-h-[85vh]">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl font-semibold text-blue-500 text-center">Login</h2>
//           <form className="mt-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold">Email</label>
//               <input type="email" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter your email" required />
//             </div>
//             <div className="mb-4 relative">
//               <label className="block text-gray-700 font-semibold">Password</label>
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 className="w-full p-2 border rounded-lg mt-1"
//                 placeholder="Enter your password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute top-10 right-3 text-blue-600"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//               >
//                 {passwordVisible ? "Hide" : "Show"}
//               </button>
//             </div>
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Login</button>
//           </form>
//           <p className="text-center mt-4">
//             Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const Login = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };



//   // const onSubmit = (data) => {
//   //   console.log("Logging in with:", data);

//   //   axios
//   //     .post("http://localhost:5000/api/auth/login",data, {
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     })
//   //     .then((response) => {
//   //       // Log the entire response to inspect the structure
//   //       console.log("Login Response:", response.data.data.access_token);

//   //       // Check if access_token exists inside response.data
//   //       if (response.data && response.data.data.access_token) {
//   //         console.log("Access Token:", response.data.data.access_token);
//   //         localStorage.setItem("token", response.data.data.access_token); // ✅ Store Token
//   //         navigate("/home"); // ✅ Redirect to Dashboard
//   //       } else {
//   //         alert("Login failed! Check credentials.");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error logging in:", error);
//   //       alert("Error logging in. Please try again.");
//   //     });

//   //   reset();
//   // };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Sajilo Rental</h2>
//         <h3 className="text-lg font-semibold text-center text-gray-700 mb-4">Login</h3>

//         {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Email Input */}
//           <div className="mb-4">
//             <label className="block font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               className="w-full p-2 border rounded"
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           {/* Password Input */}
//           <div className="mb-4 relative">
//             <label className="block font-medium text-gray-700">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               {...register("password", { required: "Password is required" })}
//               className="w-full p-2 border rounded"
//               placeholder="Enter your password"
//             />
//             <button type="button" onClick={togglePassword} className="absolute right-2 top-9 text-gray-600">
//               {showPassword ? "Hide" : "Show"}
//             </button>
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
//         </form>

//         {/* Signup Redirect */}
//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don't have an account? <a href="/signup" className="text-blue-600">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";



// const Login = () => {
//   const [error, setError] = useState("");
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleInput = (event) => {
//     setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//   };  



//   const onSubmit = async (event) => { 
//     event.preventDefault();
//     setError("");

//     const response = await fetch("http://localhost:4000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values)
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       setError(data.message);
//       console.error("Error logging in:", error);
//       alert("Error logging in. Please try again.");
//     } else {
     

//         console.log("Login Response:", data);
 
//         // Check if access_token exists inside response.data
//         if (data && data.data.access_token) {
//           console.log("Access Token:", data.data.access_token);
//           localStorage.setItem("token", data.data.access_token); // ✅ Store Token
//           navigate("/home")
//         } else {
//           alert("Login failed! Check credentials.");
//         }
//     }
  
 
//   };



//   return (
//     <div className="login-container">
//       {/* Navbar-style Logo */}
//       <div className="logo">
//         <h1>DriveEase</h1>
//       </div>

//       {/* Centered Login Form */}
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="error">{errors.email.message}</p>}
//           </div>

//           <div className="form-group password-group">
//             <label>Password</label>
//             <input
//               type={passwordVisible ? "text" : "password"}
//               {...register("password", { required: "Password is required" })}
//               placeholder="Enter your password"
//             />
//             <button
//               type="button"
//               className="toggle-password"
//               onClick={() => setPasswordVisible(!passwordVisible)}
//             >
//               {passwordVisible ? "Hide" : "Show"}
//             </button>
//             {errors.password && <p className="error">{errors.password.message}</p>}
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>

//         <p className="signup-link">
//           Don't have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import "./Login.css"

// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [error, setError] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = async (values) => { 
//     setError("");

//     try {
//       const response = await fetch("http://localhost:4000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(values),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Login failed! Check credentials.");
//       } else {
//         console.log("Login Response:", data);

//         if (data?.data?.access_token) {
//           localStorage.setItem("token", data.data.access_token);
//           navigate("/home");
//         } else {
//           setError("Login failed! Check credentials.");
//         }
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//       console.error("Error logging in:", err);
//     }
//   };

//   return (
//     <div className="login-container">
//       {/* Navbar-style Logo */}
//       <div className="logo">
//         <h1>DriveEase</h1>
//       </div>

//       {/* Centered Login Form */}
//       <div className="login-box">
//         <h2>Login</h2>
//         {error && <p className="error-message">{error}</p>}
        
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="error">{errors.email.message}</p>}
//           </div>

//           <div className="form-group password-group">
//             <label>Password</label>
//             <div className="password-wrapper">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 {...register("password", { required: "Password is required" })}
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 className="toggle-password"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//               >
//                 {passwordVisible ? "Hide" : "Show"}
//               </button>
//             </div>
//             {errors.password && <p className="error">{errors.password.message}</p>}
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>

//         <p className="signup-link">
//           Don't have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed! Check credentials.");
      } else {
        console.log("Login Response:", data);

        if (data?.data?.access_token) {
          localStorage.setItem("token", data.data.access_token);
          navigate("/home");
        } else {
          setError("Invalid credentials. Please try again.");
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      {/* Navbar-style Logo */}
      <div className="logo">
        <h1>DriveEase</h1> 
      </div>

      {/* Centered Login Form */}
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              autoComplete="email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; 



// const Signup = () => {
//   const [error , setError] = useState("")
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
   
//   const navigate = useNavigate();  
//   const handleInput = (event) => {
//     setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//   };



//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError("");
  
//     try {
//       const response = await fetch("http://localhost:4000/api/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(values),
//       });
  
//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.message);
//       } else {
//         navigate("/login");
//       }
//     } catch (error) {
//       setError("Signup failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-100">
//       {/* Navbar-style Logo */}
//       <div className="p-4">
//         <h1 className="text-3xl font-bold text-blue-600">DriveEase</h1>
//       </div>

//       {/* Centered Sign-Up Form */}
//       <div className="flex justify-center items-center min-h-[85vh]">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl font-semibold text-blue-500 text-center">Sign Up</h2>
//           <form className="mt-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold">Full Name</label>
//               <input type="text" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter your name" required />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold">Email</label>
//               <input type="email" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter your email" required />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold">Contact Number</label>
//               <input type="text" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter your phone number" required />
//             </div>
//             <div className="mb-4 relative">
//               <label className="block text-gray-700 font-semibold">Password</label>
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 className="w-full p-2 border rounded-lg mt-1"
//                 placeholder="Create a password"
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
//             <div className="mb-4 relative">
//               <label className="block text-gray-700 font-semibold">Confirm Password</label>
//               <input
//                 type={confirmPasswordVisible ? "text" : "password"}
//                 className="w-full p-2 border rounded-lg mt-1"
//                 placeholder="Confirm your password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute top-10 right-3 text-blue-600"
//                 onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//               >
//                 {confirmPasswordVisible ? "Hide" : "Show"}
//               </button>
//             </div>
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
//           </form>
//           <p className="text-center mt-4">
//             Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Signup failed. Try again.");
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="signup-container">
      {/* Navbar-style Logo */}
      <div className="logo">
        <h1>DriveEase</h1> 
      </div>

      {/* Centered Sign-Up Form */}
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Full name is required" })}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              {...register("contact", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid contact number",
                },
              })}
              placeholder="Enter your phone number"
            />
            {errors.contact && <p className="error">{errors.contact.message}</p>}
          </div>

          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Create a password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="form-group password-group">
            <label>Confirm Password</label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? "Hide" : "Show"}
            </button>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;










// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; 



// const Signup = () => {
//   const [error , setError] = useState("")
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
   
//   const navigate = useNavigate();  
//   const handleInput = (event) => {
//     setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//   };



//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError("");
  
//     try {
//       const response = await fetch("http://localhost:4000/api/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(values),
//       });
  
//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.message);
//       } else {
//         navigate("/login");
//       }
//     } catch (error) {
//       setError("Signup failed");
//     }
//   };
  

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //     if(values.username.length < 3) return setError("Username must be longer")
//   //     if(!values.contact.length === "10" ) return setError("Invalid phonenumber")
//   //     if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(values.email)) return setError("Invalid email")
//   //     if(!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(values.password)) return setError("Use stronger password!")
//   //     if(values.confirmpassword !== values.password) return setError("Password do not match")
//   //     navigate("/login");
//   // };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h1 className="auth-title">Signup</h1>
        
//           <input
//             type="text"
//             placeholder="Username"
//             className="auth-input"
//             required
//             name="name"
//             onChange={handleInput}
//           />
        

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="auth-input"
//             name="email"
//             onChange={handleInput}
//           />
          


//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="auth-input"
//             name="password"
//             onChange={handleInput}
//           />
     
          
//           <button onClick={handleSubmit} className="auth-button">Register</button>
//           {error.length > 0 && <span>{error}</span>}
//         <div className="auth-links">
//           <Link to="/login" className="auth-link">Already have an account? <strong>Login</strong></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

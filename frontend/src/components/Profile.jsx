// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Profile = () => {
//   const { register, handleSubmit, formState: { errors }, setValue } = useForm();
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const navigate = useNavigate();

//   // Fetch user data on component mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login"); // Redirect to login if no token is found
//       return;
//     }

//     try {
//       // Decode the token to get the user ID
//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       const userId = decodedToken.user.id; // Ensure this matches the field in your token payload
//       setUserId(userId);

//       // Fetch user details
//       const fetchUserData = async () => {
//         try {
//           const response = await axios.get(`http://localhost:4000/api/users/${userId}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           const user = response.data.data;
//           setValue("name", user.name);
//           setValue("email", user.email);
//           setValue("contact", user.contact);
//         } catch (err) {
//           setError("Failed to fetch user data. Please try again.");
//           console.error("Fetch user error:", err);
//         }
//       };

//       fetchUserData();
//     } catch (err) {
//       console.error("Token decoding error:", err);
//       setError("Invalid token. Please log in again.");
//       navigate("/login");
//     }
//   }, [navigate, setValue]);

//   // Handle profile update
//   const onSubmit = async (values) => {
//     setError("");
//     setSuccess("");

//     if (!values.password) {
//       setError("Password is required to update your profile.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.put(
//         `http://localhost:4000/api/users/${userId}`,
//         {
//           name: values.name,
//           email: values.email,
//           contact: values.contact,
//           password: values.password, // Password is required for verification
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setSuccess("Profile updated successfully!");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to update profile. Please try again.");
//       console.error("Update profile error:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
//       {/* Navbar-style Logo */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-blue-600">DriveEase</h1>
//       </div>

//       {/* Profile Form */}
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {success && <p className="text-green-500 mb-4">{success}</p>}

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Name Field */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               {...register("name", { required: "Name is required" })}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your name"
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...register("email", { required: "Email is required" })}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//           </div>

//           {/* Contact Field */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
//               Contact
//             </label>
//             <input
//               type="text"
//               id="contact"
//               {...register("contact", { required: "Contact is required" })}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your contact number"
//             />
//             {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
//           </div>

//           {/* Password Field */}
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password (required to update)
//             </label>
//             <div className="relative">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 id="password"
//                 {...register("password", { required: "Password is required" })}
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium"
//                 onClick={() => setPasswordVisible((prev) => !prev)}
//               >
//                 {passwordVisible ? "Hide" : "Show"}
//               </button>
//             </div>
//             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Update Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect to login if no token is found
      return;
    }

    try {
      // Decode the token to get the user ID
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));

      if (decodedPayload.user && decodedPayload.user.id) {
        const userId = decodedPayload.user.id;
        setUserId(userId);

        // Fetch user details
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`http://localhost:4000/api/users/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            const user = response.data.data;
            setValue("name", user.name);
            setValue("email", user.email);
            setValue("contact", user.contact);
          } catch (err) {
            setError("Failed to fetch user data. Please try again.");
            console.error("Fetch user error:", err);
          }
        };

        fetchUserData();
      } else {
        setError("User ID not found in token.");
        navigate("/login");
      }
    } catch (err) {
      console.error("Token decoding error:", err);
      setError("Invalid token. Please log in again.");
      navigate("/login");
    }
  }, [navigate, setValue]);

  // Handle profile update
  const onSubmit = async (values) => {
    setError("");
    setSuccess("");

    if (!values.password) {
      setError("Current password is required to update your profile.");
      return;
    }

    if (values.newPassword && values.newPassword.length < 6) {
      setError("New password must be at least 6 characters long.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:4000/api/users/${userId}`,
        {
          name: values.name,
          email: values.email,
          contact: values.contact,
          password: values.password, // Current password for verification
          newPassword: values.newPassword, // New password to update
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccess("Profile updated successfully!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile. Please try again.");
      console.error("Update profile error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Navbar-style Logo */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600">DriveEase</h1>
      </div>

      {/* Profile Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Contact Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              {...register("contact", { required: "Contact is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your contact number"
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
          </div>

          {/* Current Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Current Password (required to update)
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                {...register("password", { required: "Current password is required" })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your current password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium"
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* New Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
              New Password
            </label>
            <div className="relative">
              <input
                type={newPasswordVisible ? "text" : "password"}
                id="newPassword"
                {...register("newPassword", { minLength: 6 })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your new password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium"
                onClick={() => setNewPasswordVisible((prev) => !prev)}
              >
                {newPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">New password must be at least 6 characters long.</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
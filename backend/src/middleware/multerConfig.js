// import multer from "multer";
// import path from "path";

// // Set up storage engine
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save files in the 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
//   },
// });

// // File filter to allow only specific file types
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true); // Accept the file
//   } else {
//     cb(
//       new Error("Invalid file type. Only JPEG, PNG, and GIF are allowed!"),
//       false
//     );
//   }
// };

// // Initialize Multer
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit
// });

// export default upload;

// config/multerConfig.js

import multer from "multer";
import path from "path";

// Set up the storage engine for multer to save files to a specific directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname); // Get file extension
    const filename = Date.now() + extname; // Ensure a unique filename
    cb(null, filename); // Set the filename for the uploaded file
  }
});

// Create the multer upload middleware with the storage config
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Set file size limit (e.g., 5MB)
  },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/; // Allowed file types
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error("Only image files are allowed!"));
  }
}).array("images", 5); // The field name 'images' and max number of files (5)

export default upload;


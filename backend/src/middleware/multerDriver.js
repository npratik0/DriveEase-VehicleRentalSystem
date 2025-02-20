import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Same directory for consistency
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    const filename = Date.now() + extname;
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(new Error("Only image files (jpeg, jpg, png) are allowed!"));
};

const uploadDriver = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit per file
  fileFilter,
}).fields([
  { name: "driverPhoto", maxCount: 1 },
  { name: "licenseFront", maxCount: 1 },
  { name: "licenseBack", maxCount: 1 },
]);

export default uploadDriver;

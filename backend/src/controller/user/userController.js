import { User } from '../../models/index.js'
// import bcrypt from "bcrypt";


/**
 *  fetch all users
 */
const getAll = async (req, res) => {
    try {
        //fetching all the data from users table
        const users = await User.findAll();
        res.status(200).send({ data: users, message: "successfully fetched data" })
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

/** 
 *  create new user
*/

// const create = async (req, res) => {

//     try {
//         const body = req.body
//         console.log(req.body)
//         //validation
//         if (!body?.email || !body?.name || !body?.password)
//             return res.status(500).send({ message: "Invalid paylod" });
//         const users = await User.create({
//             name: body.name,
//             email: body.email,
//             password: body.password
//         });
//         res.status(201).send({ data: users, message: "successfully created user" })
//     } catch (e) {
//         console.log(e)
//         res.status(500).json({ error: 'Failed to fetch users' });
//     }
// }

const create = async (req, res) => {
    try {
      const { name, email, contact, password } = req.body;
  
      // Validate input fields
      if (!name || !email || !contact || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Check if the email already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }
  
      // Check if the contact number is already in use
      const existingContact = await User.findOne({ where: { contact } });
      if (existingContact) {
        return res.status(400).json({ message: "Contact number already registered" });
      }
  
    //   Hash password before storing
    //   const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = await User.create({
        name,
        email,
        contact,
        // password: hashedPassword,
        password,
      });
  
      res.status(201).json({
        message: "User registered successfully",
        data: { id: newUser.id, name: newUser.name, email: newUser.email, contact: newUser.contact },
      });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ error: "Failed to register user" });
    }
  };

/**
 *  update existing user
 */

// const update = async (req, res) => {

//     try {
//         const { id = null } = req.params;
//         const body = req.body;
//         console.log(req.params)
//         //checking if user exist or not
//         const oldUser = await User.findOne({ where: { id } })
//         if (!oldUser) {
//             return res.status(500).send({ message: "User not found" });
//         }
//         oldUser.name = body.name;
//         oldUser.password = body.password || oldUser.password;
//         oldUser.email = body.email
//         oldUser.contact = body.contact
//         oldUser.save();
//         res.status(201).send({ data: oldUser, message: "user updated successfully" })
//     } catch (e) {
//         console.log(e)
//         res.status(500).json({ error: 'Failed to update users' });
//     }
// }

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact, password, newPassword  } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify the provided password (plain text comparison)
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Update user details
    user.name = name || user.name;
    user.email = email || user.email;
    user.contact = contact || user.contact;

    if (newPassword) {
      user.password = newPassword;
    }

    await user.save();

    res.status(200).json({
      message: "User updated successfully",
      data: { id: user.id, name: user.name, email: user.email, contact: user.contact },
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

/**
 *  delete user 
 */
const delelteById = async (req, res) => {

    try {
        const { id = null } = req.params;
        const oldUser = await User.findOne({ where: { id } })

        //checking if user exist or not
        if (!oldUser) {
            return res.status(500).send({ message: "User not found" });
        }
        oldUser.destroy();
        res.status(201).send({ message: "user deleted successfully" })
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

/**
 *  fetch user by id
 */
// const getById = async (req, res) => {

//     try {
//         const { id = null } = req.params;
//         const user = await User.findOne({ where: { id } })
//         if (!user) {
//             return res.status(500).send({ message: "User not found" });
//         }
//         res.status(201).send({ message: "user fetched successfully", data: user })
//     } catch (e) {
//         res.status(500).json({ error: 'Failed to fetch users' });
//     }
// }
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error("Fetch user error:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};


export const userController = {
    getAll,
    create,
    getById,
    delelteById,
    update
}
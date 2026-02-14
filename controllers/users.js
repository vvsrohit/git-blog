//useing controller for user routes

const User = require('../models/user');

//create user
async function createUser(req, res) {
    try { 
        const { name, email, collage, movies, finance, projects } = req.body;
        const newUser = new User({ name, email, collage, movies, finance, projects });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

 async function getAllUsers(req, res) {
    try {
        const users = await User.find();
         return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);    
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
};

async function updateUser(req, res) {
  try {
    // Build update object dynamically
    const updateData = {};
    const allowedFields = ["name", "email", "collage", "movies", "finance", "projects"];

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    // Update only the fields present in updateData
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true } // return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
}

async function deleteUser(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
};


module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
    

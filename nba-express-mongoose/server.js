const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL, {
});


const teamSchema = new mongoose.Schema({
  name: String,
  wins: Number,
  losses: Number
});


const Team = mongoose.model('Team', teamSchema);


app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find(); 
    res.json(teams); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
require("dotenv").config({path:"./.env"});
const mongoose = require('mongoose');
const userRoutes = require('./components/routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use("/", (req,res) => {
    res.send("server is running....");
    res.end();
});

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const eventRoute = require('./routes/eventRoute.js');
const userRoute = require('./routes/userRoute.js');
const dotenv = require("dotenv");
const cors = require("cors")

const app = express();
dotenv.config();
app.use(cors())
connectDB();

app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/events', eventRoute);
app.use('/api/users', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
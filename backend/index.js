// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8000;
const userRoutes=require("./routes/Userroute")
const database = require('./config/database');
const shopRouter=require("./routes/ShopRegistration");
const orderRoutes=require("./routes/Order");
const getdetailsRoutes=require("./routes/admingetorder");
const fileRouter=require("./routes/filemangeorder");
const fetchdataRouter=require("./routes/datafetchroute");
const shoprunRouter=require("./routes/shopRunRoutes");
const shopratingRouter=require("./routes/ratingroute");
const menuRouter =require("./routes/menuroutes");
const http = require('http');
const socketIo = require('socket.io');
// Call the run function
const server = http.createServer(app);
const io = socketIo(server);


// Middleware
app.use(bodyParser.json());
app.use(cors());


database.connect();
// Routes
app.use("/printx/api/v1/auth",userRoutes);
app.use("/printx/api/v1/shopauth",shopRouter);
app.use("/printx/api/v1/order",orderRoutes);
app.use("/printx/api/v1/adminget",getdetailsRoutes);
app.use("/printx/api/v1/filemange",fileRouter);
app.use("/printx/api/v1/fetchdata",fetchdataRouter);
app.use("/printx/api/v1/shoprun",shoprunRouter);
app.use("/printx/api/v1/ratings",shopratingRouter);
app.use("/printx/api/v1/menu",menuRouter);
// app.use("/printx/api/v1/shoprun",shopRunRouter);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // You can use socket.id as a unique identifier for each connected client

  // Emit a welcome message to the connected client
  socket.emit('welcome', { message: 'Welcome to the server!', userId: socket.id });

  // Handle other events or emit messages to this specific socket

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


app.get('/index', (req, res) => {
  res.send('Hello, your server is running! thanks');
});
app.get('/', (req, res) => {
  res.send('Hello, your server is running!');
});
//ts
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = { io };

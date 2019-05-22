// Requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.load();

const app = express();
// Routes
// const userRoutes = require('./routes/userRoutes'); --
// const courseRoutes = require('./routes/courseRoutes'); --
const accountRoutes = require('./routes/accountRoutes');
// const transactionRoutes = require('./routes/transactionRoutes');
// const operationRoutes = require('./routes/operationRoutes');

// Connection with mongo atlas db

mongoose.connect('mongodb://127.0.0.1:27017/aadPlay?retryWrites=true', { useNewUrlParser: true })
.then(() => {
  console.log('Connected to the database');
})
.catch(() => {
  console.log('Connection failed!');
});

// app configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.options('*', cors());
app.use(cors());

// Routes used
// app.use('/user', userRoutes); --
// app.use('/course', courseRoutes); --
app.use('/accounts', accountRoutes);
// app.use('/transactions', transactionRoutes);
// app.use('/operations', operationRoutes);

module.exports = app;
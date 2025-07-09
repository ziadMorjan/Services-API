const express = require("express");

const {globalErrorHandler}=require("./middlewares/errorMiddleware");
const cors = require('cors');
const morgan = require('morgan');
const app = express();


app.use(morgan("dev"));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(globalErrorHandler);
module.exports = app;

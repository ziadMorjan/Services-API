const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const { dbConnect } = require("./config/db");
const app = require('./app');

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/test';

app.listen(port, () => {
    console.log("🚀 Server running on port " + port)
    console.log("Environment: " + environment);
});

dbConnect(uri);


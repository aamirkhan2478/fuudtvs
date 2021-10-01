const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { auth } = require('./Middleware/auth');
//dotenv
dotenv.config({ path: './config.env' });
const port = process.env.PORT || 5000;

//convert json form
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

//set cookies parser
app.use(cookieParser());

//Cors
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

//Database Connection
require('./Database/conn');

//Routers
app.use('/', require('./Routes/user'));
app.use('/deshboard', auth, require('./Routes/deshboard'));

//Server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

dotenv.config({ path: 'config.env' });
app.set('port', process.env.PORT || 8080);

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/gateways", require('./routes/gateways.routes'));


module.exports = app;
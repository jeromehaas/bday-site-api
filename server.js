const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const cors = require('cors');
const helmet = require('helmet');
const router = require('./router');
require('dotenv').config();
const port = process.env.PORT;


app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port || process.env.PORT || 3001, () => {
	console.log(`🚀 App is up and running on port ${port}...`);
})
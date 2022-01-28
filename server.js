const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const port = 3001;
const cors = require('cors');
const helmet = require('helmet');
const router = require('./router');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
	console.log(`🚀 App is up and running on port ${port}...`);
})
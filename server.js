const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRouter = require('./api/api');
const envelopeRouter= require('./api/envelope');


const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

if (!process.env.IS_TEST_ENV) {
  app.use(morgan('short'));
}

// Parsing
app.use(bodyParser.json());

app.use('/api',apiRouter);
app.use('/envelope',envelopeRouter);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
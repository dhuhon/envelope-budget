const express = require('express');
const apiRouter = express.Router();



apiRouter.get('/',(req, res, next)=>{
res.send('hello world');
});





module.exports = apiRouter;

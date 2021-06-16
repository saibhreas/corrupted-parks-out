const axios = require('axios').default;
const router = require('express').Router();


const authRoute= require ("./userAuth");

router.use('/user',authRoute);

//router.use('/',  file name);
module.exports= router;
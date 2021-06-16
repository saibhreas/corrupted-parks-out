const axios = require('axios').default;
const router = require('express').Router();

const authRoute= require ("./userAuth");

router.use('/auth',authRoute);

//router.use('/',  file name);
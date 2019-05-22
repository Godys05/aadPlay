const express = require('express');
const userFunctions = require('../controllers/user');
const router = express.Router();

router.post('/signup', (req,res,next) => {
    userFunctions.createUser(req,res,next);
});

router.post('/login', (req,res,next) => {
    userFunctions.login(req,res,next);
});

module.exports = router;
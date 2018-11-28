const express = require('express');
const router = express.Router();

const {home} = require("./home");
const {login,register} = require('./authentication');
const UserHandler = require("./users");



/**
 * HOME or /
*/

router.get("/",home.client.get);

/**
 * AUTHENTICATION
*/

//REGISTER CLIENT
router.get("/auth/register",register.client.get);

router.post("/auth/register",register.client.post);

//LOGIN ClIENT
router.get('/auth/login',login.client.get);

router.post('/auth/login',login.client.post);

/**
 * USERS
*/

router.get("/users",UserHandler);

module.exports = router;
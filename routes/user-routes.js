const express = require('express');
const { signup, verifyToken, login,getUser } = require('../controllers/user-controller');


const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/user",verifyToken,getUser);

module.exports =  router;
const express= require("express");
const bcryptjs= require("bcryptjs");
const jwt= require("jsonwebtoken");

const AuthController= require("../controllers/auth_controller");

const authRouter= express.Router();

//SignUp
authRouter.get("/signup", AuthController.signup);

module.exports= authRouter;


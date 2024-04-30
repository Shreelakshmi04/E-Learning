const express = require('express');
const UserSchema = require('../Models/user')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()



const Register = async (req, res) => {
    try {
      const { name, phone, address, pinCode, email, password } = req.body;
  
      console.log({ name, phone, address, pinCode, email, password })
  
      let user = await UserSchema.findOne({ email });
  
      if (user) {
        return res.json({ success: false, message: "Email already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
  
      user = new UserSchema({
        name,
        phone,
        address,
        pinCode,
        email,
        password: secPass,
      });
  
      let savedUser = await user.save();
  
      res.json({
        success: true,
        message: `User with name ${savedUser.name} added successfully`,
      });
    } catch (err) {
      console.log(err);
    }
  };

const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await UserSchema.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ success: false, message: "Incorrect Credentials" });
      }
  
      let comparePassword = await bcrypt.compare(password, user.password);
  
      if (!comparePassword) {
        return res.status(404).json({ success: false, message: "Invalid Credentials" });
      }
  
      let data = {
        user: {
          id: user.id,
        },
      };
  
      let authToken = jwt.sign(data, process.env.JWT_SECRET);
      res.json({ success: true, authToken });
    } catch (err) {
      console.log(err);
    }
  };








module.exports = { Register, Login }
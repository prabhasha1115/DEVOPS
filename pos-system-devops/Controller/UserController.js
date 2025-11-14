const User = require('../model/UserSchema');
const bcrypt = require('bcrypt');
const bcrypt = require('jsonwebtoken');

const signup = async (req,resp)=>{
    try{

        const{ fullName, email, password} = req.body;
        const existingUser = await User.findOne ({email});
        if(existingUser) return resp.status(409).json({'message':'User already exists'});

        const hashedPassword = await bcrypt.hash(password, 10);
        const savedUser = User.create({fullName,email,hashedPassword});
        resp.status(201).json({'message':'User created successfully', data :savedUser});

    }catch (e) {

        resp.status(500).json({'message':'signup error',error:e})

    }
};

const login = async (req,resp)=>{
    try{


    }catch (e) {

        resp.status(500).json({'message':'signup error',error:e})

    }
};
module.exports={signup,login}
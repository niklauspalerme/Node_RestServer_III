const { response } = require('express');
const req = require('express/lib/request');
const jwt = require('jsonwebtoken');
const { config } = require('dotenv');


const validarJWT = (req,res,next) =>{

    config();

    const token = req.header('x-token');

    if (!token)
         return res.status(401).json({
            msg: "There is not token on the request."
        })

    try {

        const payload =  jwt.verify(token,process.env.SECRETKEY)
        req.uid=payload.uid //Pasamos el uid por referenica al req
        
    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: "Token Invalid. Pleae try with another one."
        })
        
    }

    next();

}



 module.exports={
     validarJWT
 }
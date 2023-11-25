import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

export const authRequered = (req, res, next)=> {
    const {token} = req.cookies;
    dotenv.config();

    console.log(token);

    const SECRET = process.env.TOKEN_SECRET;
    
    if(!token)
    return res.status(401).json({message: "No token, Authorization Denied"});
    
    jwt.verify(token,SECRET,(err,user)=>{
        if (err) return res.status(403).json({message: "Invalid Token"})
        //console.log(user);
        req.user = user;
   
        next();
    })
    
   
};    
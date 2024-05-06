import  Jwt  from "jsonwebtoken";
import { UserModel } from "../Models/user.js";

const User=UserModel;

export const requireSignIn=async (req,res,next)=>{
    try {
        const decode =await Jwt.verify(req.headers.authorization,process.env.JWT_Secret);
        req.user=decode;
       
       
      
      next();
    } catch (error) {
        console.log(error);
    }
}

export const isAdmin=async(req,res,next)=>{
    try {
         const checkAdmin= await User.findById(req.user._id);

         if(checkAdmin.role===1){
           
            next();
         }

         else{
            res.json({
                message:"Not Authorized"
            })
         }
    } catch (error) {
        console.log(error)
    }
}
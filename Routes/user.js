import express, { Router } from 'express';
import { authController, loginUser, newUser } from '../Controllers/user.js';
import { isAdmin, requireSignIn } from '../MiddleWare/authMiddleware.js';
const userRoute=express.Router();


userRoute.post('/register',newUser)
userRoute.post('/login',loginUser)
userRoute.get('/auth-check',requireSignIn,authController)
userRoute.get('/admin-check',requireSignIn,isAdmin,authController)


export const Route=userRoute;
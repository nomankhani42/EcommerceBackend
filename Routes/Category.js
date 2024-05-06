import express from 'express';
import { isAdmin, requireSignIn } from '../MiddleWare/authMiddleware.js';
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../Controllers/Category.js';
const CatRouter = express.Router();


// create Category

CatRouter.post('/create-category',requireSignIn,isAdmin,createCategory)
//get AlL categories

CatRouter.get('/get-categories',getAllCategories)
// Update Category
CatRouter.put('/update-category/:id',requireSignIn,isAdmin,updateCategory)

//delete Category
CatRouter.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategory)




export const CatRoute = CatRouter;
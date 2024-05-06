import express from 'express';
import { createProductController, deleteProduct, getAllProductController, getSingleProductController, getSingleProductPhotoController, updateProductController } from '../Controllers/Product.js';
import { isAdmin, requireSignIn } from '../MiddleWare/authMiddleware.js';
import ExpressFormidable from 'express-formidable';
// import { isAdmin, requireSignIn } from '../MiddleWare/authMiddleware.js';


const ProductRouter = express.Router();


ProductRouter.post('/create-product',requireSignIn,isAdmin,ExpressFormidable(),createProductController);
ProductRouter.get('/get-products',getAllProductController)
ProductRouter.get('/get-product/:slug',getSingleProductController)
ProductRouter.get('/get-Photo/:id',getSingleProductPhotoController);
ProductRouter.get('/get-Photo/:id',getSingleProductPhotoController);
ProductRouter.put('/update-product/:id',requireSignIn,isAdmin,ExpressFormidable(),updateProductController);
ProductRouter.put('/delete-product/:id',requireSignIn,isAdmin,deleteProduct);





export const ProductRoute= ProductRouter;
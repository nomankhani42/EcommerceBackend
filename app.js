import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Route } from './Routes/user.js';
import { CatRoute } from './Routes/Category.js';
import dotenv from 'dotenv';
import { ProductRoute } from './Routes/Product.js';


dotenv.config();



const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())


main().then(()=>console.log('DB connected')).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
  
}

app.use('/api/',Route)
app.use('/api/category',CatRoute)
app.use('/api/products',ProductRoute)

app.listen(process.env.PORT || 8080,()=>{
    console.log('App Running');
})

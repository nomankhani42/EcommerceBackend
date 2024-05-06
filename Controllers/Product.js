import slugify from "slug";
import { Product_Model } from "../Models/Product.js";
import fs from 'fs';




export const createProductController=async(req,res)=>{
  try {
    const{title,description,price,category}=req.fields; 
   const {photo}= req.files;

   if(!title){
      return res.json({
         message:'Title is required'
      })
      
   }
   if(!description){
    return res.json({
       message:'Description is required'
    })
   
    
 }
 if(!price){
  return res.json({
     message:'Price is required'
  })
  
}

if(!category){
  return res.json({
     message:'Category is required'
  })


  
}
if(!photo && photo.size<100000){
  return res.json({
    message:'Photo is required and it must be greater than 1 mb'
 })
}

  const Product=await new Product_Model({...req.fields,slug:slugify(title)});

  if(photo){

    Product.photo.data=fs.readFileSync(photo.path);
    Product.photo.contentType=photo.type;
  }
  Product.save();

  return res.json({
    message:'Product is Created',
    Product
  })

    
  }
   catch (error) {
      res.json({
        error
      })
  }
}


export const getAllProductController=async(req,res)=>{
  try {
     const Products=await Product_Model.find().select('-photo');

      return res.json({
        message:'All Products Fetched',
        Products
      })
  }
   catch (error) {
    
  }
}

export const getSingleProductController=async(req,res)=>{
  try {
     const {slug}=req.params;

     const Product =await Product_Model.findOne({slug}).select('-photo');
     return res.json({
      message:'Single Product fetched',
      Product
     })
  }
   catch (error) {
    
  }
}
export const getSingleProductPhotoController=async(req,res)=>{
  try {
      const id=req.params.id;

      const Product=await Product_Model.findById(id).select('photo');
      if(Product.photo.data){
        res.set('content-Type',Product.photo.contentType);
        return res.send(Product.photo.data);
      }
  } 
  catch (error) {
     console.log(error)
  }
}

export const updateProductController=async(req,res)=>{
  try {
    const{title,description,price,category}=req.fields; 
   const {photo}= req.files;


   if(!title){
      return res.json({
         message:'Title is required'
      })
      
   }
   if(!description){
    return res.json({
       message:'Description is required'
    })
   
    
 }
 if(!price){
  return res.json({
     message:'Price is required'
  })
  
}

if(!category){
  return res.json({
     message:'Category is required'
  })


  
}
if(!photo && photo.size<100000){
  return res.json({
    message:'Photo is required and it must be greater than 1 mb'
 })
}

  const Product=await Product_Model.findByIdAndUpdate(req.params.id,{...req.fields,slug:slugify(title)});

  if(photo){

    Product.photo.data=fs.readFileSync(photo.path);
    Product.photo.contentType=photo.type;
  }
  Product.save();

  return res.json({
    message:'Product is Updated',
    Product
  })

    
  }
  
  catch (error) {
    
  }
}

export const deleteProduct=async(req,res)=>{
  try {
    const Product=await Product_Model.findByIdAndDelete(req.params.id);;

    return res.json({
      message:'Product is deleted',
        Product
    })
  }
  
  catch (error) {
    
  }
}
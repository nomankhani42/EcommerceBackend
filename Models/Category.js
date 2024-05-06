import express from 'express';
import  Mongoose,{Schema } from 'mongoose';
import slug from 'slug';

const categorySchema=new Schema({
    category:{
        type:String,
        required:true,
        unique:true
    }
    // ,
    // slug:{
    //     type:String,
    //     required:true
    // }
})

export const  CategoryModel= Mongoose.model('categories',categorySchema)
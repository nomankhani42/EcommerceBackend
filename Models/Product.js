import mongoose from "mongoose";
import slug from "slug";

const ProductSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
    required:true,
    type:mongoose.ObjectId,
    ref:'categories'
    },
    photo:{
        data:Buffer,
        contentType:String
    }
})

export const Product_Model= mongoose.model('Product',ProductSchema);
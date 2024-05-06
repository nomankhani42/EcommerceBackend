import mongoose ,{Schema, model} from "mongoose";

const userSchema=new Schema(
    {
        name:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true,
            unique:true
        },
        role:{
            type:Number,
            default:0
        },
        country:{
            type:String,
            required:true
        },
      
        password:{
            type:String,
            required:true,
           
            
        }
    }
)

 export const UserModel=mongoose.model('users',userSchema);
import { CategoryModel} from '../Models/Category.js';
import slugify from 'slug';

export const createCategory=async(req,res)=>{
    const {catName}=req.body;
    try {


     
        const Category =await CategoryModel.findOne({category:catName});
        if(Category){
            return res.json({
                success:false,
                message:'Category Already Exists',
                Category
            })

        }
        const NewCat=await new CategoryModel({category:catName,slug:slugify(catName)}).save();

        return res.json({
               success:true,
               message:'New Category added Successfully',
               NewCat
        })

    } 
    catch (error) {
         console.log(error)
    }
}

export const getAllCategories=async (req,res)=>{
    try {
          const categories=await CategoryModel.find({});
          res.json({
            success:true,
            message:'All Categries Data are Getted',
            categories
          })
    } 
    catch (error) {
       console.log(error) 
    }
}

export const updateCategory=async(req,res)=>{
    const {updateCat} = req.body;
    try {
        const Update = await CategoryModel.findByIdAndUpdate(req.params.id,{category:updateCat,slug:slugify(updateCat)});

        return res.json({
            success:true,
            message:'Category Updated Successfully',
            Update
        })
    } catch (error) {
         console.log(error)
    }
}
export const deleteCategory=async(req,res)=>{
   
    try {
        const Update = await CategoryModel.findByIdAndDelete(req.params.id);;

        return res.json({
            success:true,
            message:'Category Deleted Successfully'
            
        })
    } catch (error) {
         console.log(error)
    }
}
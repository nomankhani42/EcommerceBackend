import bcrypt from "bcryptjs"

export const hashed=async (password)=>{
    try {
      
         return bcrypt.hash(password,10)
    } catch (error) {
        console.log(error)
    }
}

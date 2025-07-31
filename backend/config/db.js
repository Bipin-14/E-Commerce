import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect("mongodb+srv://bipinthapa838:fUDYBinKWWkfRgyC@cluster0.ca4jpxq.mongodb.net/food-delretryWrites=true&w=majority").then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.

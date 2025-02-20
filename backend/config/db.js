import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://bheemarohith:rohith@cluster0.mobl0.mongodb.net/food-del')
    .then(() =>console.log("DB Connected"));
};
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectDataBase = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_LINK);
        console.log(`Connected to MongoDB ${connect.connection.host}`);  // if successfully connected to MongoDB, it will print this message.
    }catch(error){
        console.error(`error: ${error.message}`);
        process.exit(1);
    }

};

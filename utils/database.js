import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () =>{
    mongoose.set("strictQuery", true); // Set strict query mode
    
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "prompia",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true; // Update the connection status
        console.log("MongoDB connected");

    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}
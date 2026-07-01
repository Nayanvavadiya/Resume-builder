import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        // const mongoUri = "mongodb+srv://resume_admin:Admin_Resume_951@cluster0.agnkrdi.mongodb.net/?appName=Cluster0";

        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined");
        }

        const conn = await mongoose.connect(mongoUri);
        console.log(`DB CONNECTED: ${conn.connection.host}`);
    } catch (error) {
        console.error(`DB CONNECTION ERROR: ${error.message}`);
        process.exit(1);
    }
}
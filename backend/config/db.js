import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

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
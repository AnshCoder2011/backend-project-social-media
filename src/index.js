import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";

// Approach 2 -

connectDB();

// Approach 1 -

// import express from "express";
// const app = express()

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error)=> {
//         console.log("ERROR: ", error)
//         throw error
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`Listening on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();

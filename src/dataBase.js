import mongoose from "mongoose";

export const connectDataBase = async () => {
  await mongoose
    .connect(process.env.MONGO_URI) // connect to the URI in .env file
    .then((conn) => console.log(`Database Connected ${conn.connection.host}`)) // console log out the connect string
    .catch((err) => console.log(`Error connected ${err}`)); // catch if any error
};

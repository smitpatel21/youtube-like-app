import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connetDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    // console.log(connectionInstance);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connetDB;

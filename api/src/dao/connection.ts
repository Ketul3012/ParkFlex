import mongoose from "mongoose";
import { Users } from "../models/User";
import { Listing } from "../models/Listing";
import { Review } from "../models/Review";
import Booking from "../models/Bookings";
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@webgroupproject.dhqv6jf.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority&appName=WebGroupProject`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Connection error", error));

const dataBase = {
  listings: Listing,
  users: Users,
  reviews: Review,
  booking: Booking,
};

export { dataBase };

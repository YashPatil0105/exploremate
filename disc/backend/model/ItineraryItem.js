import mongoose from "mongoose";

const itineraryItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  day: String,
  activity: String,
  time: String
});

const ItineraryItem = mongoose.model("ItineraryItem", itineraryItemSchema);

export default ItineraryItem;

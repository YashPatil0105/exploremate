import mongoose from "mongoose";

const itineraryItemSchema=new mongoose.Schema({
  activity:{
    type:String,
    required:true,
  },
  day:{
    type:Date,
    required:true,
  },
  time:{
    type:String,
    required:true,
  },
  author:{
    type:[mongoose.Schema.Types.ObjectId],
    required:true,
    ref:"DiscussionUser",
  }
});

// const itineraryItemSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   day: String,
//   activity: String,
//   time: String
// });

const ItineraryItem = mongoose.model("ItineraryItem", itineraryItemSchema);

export default ItineraryItem;

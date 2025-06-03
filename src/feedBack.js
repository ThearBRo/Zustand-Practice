import mongoose from "mongoose";

const feedBackSchema = new mongoose.Schema({
  advices: {
    type: Array,
    required: true,
  },
  ideas: {
    type: Array,
    required: true,
  },
});

const feedBack = mongoose.model("feedBack", feedBackSchema);

export default feedBack;

import mongoose from "mongoose";
const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Test = mongoose.model("test", testSchema);
export default Test;

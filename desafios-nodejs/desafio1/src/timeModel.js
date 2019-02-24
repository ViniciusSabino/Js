import mongoose from "mongoose";

const TimeSchema = mongoose.Schema;

const timeSchema = new TimeSchema(
  {
    nome: { type: String },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("times", timeSchema);

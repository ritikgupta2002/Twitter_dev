import mongoose from "mongoose ";

const likeSchema = new mongoose.Schema(
  {
    //on which model we are going to like
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
    likeable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
    user: {
      type: mongoose.schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;

const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

//schema is a blueprint , model is a actual object that will create the data for us .
tweetSchema.virtual('contentWithEmail').get(function process(){
  return `${this.content} \nCreated by: ${this.userEmail}`;
})
//virtual helps us to write custom queries , we can define any with the help of virtuals which will be 
//computed at runtime and may not be a part of the actual schema .
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;

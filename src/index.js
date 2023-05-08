const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongodb connected");
  const tweetRepo = new TweetRepository();
  // const tweet = await tweetRepo.create({
  //   content: "Tweet with comment schema2",
  // });
  // console.log(tweet);
  // const comment = await Comment.create({ content: "new comment2" });
  // tweet.comments.push(comment);
  // await tweet.save();
  const tweet= await tweetRepo.getWithComments('64588ce072e96e27312dc9e5');
  console.log(tweet); 
});

const { TweetRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }
 async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtages
    tags = tags.map((tag) => tag.substring(1)); //removing the hashtags from each hashtag
    console.log(tags);
    const tweet= await this.tweetRepository.create(data);
    //create hashtags and add here 
    /**
     * 1.bulcreate in mongoose
     * 2.filter title of hashtag based on multiple tags 
     * how to add tweet id inside all the hashtags 
     */
    return tweet ;   
  }
}

module.exports = TweetService;

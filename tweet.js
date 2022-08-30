class Tweet {
  constructor(handle,content,link,likes){
    this.sender = handle
    this.content = content
    this.link = link || 'no link provided'
    this.likes = 0
    this.retweets = 0
    this.replies = []
    this.replyCount = 0
  }
  like() {
   this.likes += 1
  }

  retweet() {
    this.retweets += 1
  }

  reply(message) {
  this.replies.push(message)
  this.replyCount ++
  }

}

module.exports = Tweet;

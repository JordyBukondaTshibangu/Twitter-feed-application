export const usersAndFeed = (users, tweets) => {
    try {

        if(!users || !tweets){
            console.log("THERE IS NO DATA!");
            return new Error();
        } 

        let usersFeed = []
        let followers = []
        let matchingResult = []

        usersFeed = users.map(user => {
            followers = user.followers.map(follower => {
                matchingResult = tweets.filter(tweet => {
                    if(tweet.author.trim().toLowerCase() === follower.trim().toLowerCase()){
                        return {
                            author : follower,
                            content : tweet.content
                        }
                    }
                    return null
                })
                return matchingResult
            })
            return {
                name : user.name,
                followers 
            }
        })
        return usersFeed
    } catch(err){
        console.log(err.message)
        return new Error();
    }
}
